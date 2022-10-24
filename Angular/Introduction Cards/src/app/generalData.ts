export interface CardData {
  profile_img: string;
  title: string;
  first_name: string;
  last_name: string;
  job_title: string;
  company_name: string;
  address: {
    country: string;
    city: string;
    street: {
      name: string;
      number: string;
    };
  };
  media: string[];
  icon: string[];
}
