export interface Contact {
  id: number;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: number;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
