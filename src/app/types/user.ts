export type TUser = {
	_id: number;
	_email: string;
	_first_name: string;
	_last_name: string;
	_avatar: string;
};

export type TUserResponse = {
	data: TUser[];
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
};
