// A simple TypeScript interface describing your CV data

export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
  }
  
  export interface CvForm {
    personal: PersonalInfo;
    summary: string;
  }
  