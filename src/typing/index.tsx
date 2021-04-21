type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
};

type Compagny = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type User = {
  address: Address;
  company: Compagny;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  image?: string;
};
