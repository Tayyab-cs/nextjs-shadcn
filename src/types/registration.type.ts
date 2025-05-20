export interface RegistrationFormData {
    firstName: string;  // input-field
    lastName: string;   // input-field
    email: string;  // input-field
    password: string;   // input-field
    confirmPassword: string;    // input-field
    dob: Date;  // date-picker
    gender: string; // dropdown
    religion: string;   // dropdown
    presentAddress: string; // textarea
    permenantAddress: string;   // textarea
    city: string;   // input-field
    state: string;  // drop-down
    country: string;    // drop-down
    phoneNo: number;    // input-field
    joiningDate: Date;  // date-picker
    workingFrom: Date;  // time-picker
    workingto: Date;    // time-picker
    hours: number;  // input-field readonly
}