export type TUser = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
};

export type TUserResponse = {
	data: TUser[];
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
};

export type TUserDetailsResponse = {
	data: TUser;
};
