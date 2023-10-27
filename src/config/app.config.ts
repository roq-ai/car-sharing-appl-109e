interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings', 'Create reviews', 'Create reports', 'Edit your info'],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage cars', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/55f54640-e9d6-4b36-8bc9-d30f05fea5db',
};
