import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import axios from "axios";
import type { Address } from "../types";

const apiUrl = import.meta.env.VITE_API_URL;

interface AddressContextType {
	addresses: Address[];
	loading: boolean;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export function AddressProvider({ children }: { children: ReactNode }) {
	const [addresses, setAddresses] = useState<Address[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const cached = sessionStorage.getItem("addresses");
		if (cached) {
			setAddresses(JSON.parse(cached));
			setLoading(false);
			return;
		}

		axios
			.get(apiUrl)
			.then((res) => {
				const data = res.data.data;
				setAddresses(data);
				sessionStorage.setItem("addresses", JSON.stringify(data));
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	return (
		<AddressContext.Provider value={{ addresses, loading }}>
			{children}
		</AddressContext.Provider>
	);
}

export function useAddresses() {
	const context = useContext(AddressContext);
	if (!context)
		throw new Error("useAddresses must be used within AddressProvider");
	return context;
}
