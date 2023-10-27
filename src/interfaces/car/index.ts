import { BookingInterface } from 'interfaces/booking';
import { ReportInterface } from 'interfaces/report';
import { ReviewInterface } from 'interfaces/review';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  license_plate?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  report?: ReportInterface[];
  review?: ReviewInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
    report?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  organization_id?: string;
}