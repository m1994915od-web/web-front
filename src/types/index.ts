export interface Address {
	artworks: Artwork[];
	createdAt: string;
	documentId: string;
	id: number;
	name: string;
	publishedAt: string;
	updatedAt: string;
}

export interface Artwork {
	createdAt: string;
	description: string;
	documentId: string;
	id: number;
	images: Image[];
	publishedAt: string;
	size: string;
	title: string;
	updatedAt: string;
}

export interface Image {
	alternativeText: string | null;
	createdAt: string;
	documentId: string;
	ext: string;
	formats: {
		thumbnail: {
			ext: string;
			hash: string;
			height: number;
			mime: string;
			name: string;
			path: string | null;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
			size: number;
			sizeInBytes: number;
			url: string;
			width: number;
		};
		medium: {
			ext: string;
			hash: string;
			height: number;
			mime: string;
			name: string;
			path: string | null;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
			size: number;
			sizeInBytes: number;
			url: string;
			width: number;
		};
		small: {
			ext: string;
			hash: string;
			height: number;
			mime: string;
			name: string;
			path: string | null;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
			size: number;
			sizeInBytes: number;
			url: string;
			width: number;
		};
		large: {
			ext: string;
			hash: string;
			height: number;
			mime: string;
			name: string;
			path: string | null;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
			size: number;
			sizeInBytes: number;
			url: string;
			width: number;
		};
	};
	hash: string;
	height: number;
	id: number;
	mime: string;
	name: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: {
		public_id: string;
		resource_type: string;
	};
	publishedAt: string;
	size: number;
	updatedAt: string;
	url: string;
	width: number;
}
