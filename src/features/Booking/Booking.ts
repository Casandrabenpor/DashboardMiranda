export type Booking = {
  guest: string;
  id: string;
  order_date: string;
  check_in: string;
  check_in_hour: string | undefined;
  check_out: string;
  check_out_hour: string | undefined;
  room_type: string;
  room_number: string | undefined;
  status: string | undefined;
  room_id: string | undefined;
};
