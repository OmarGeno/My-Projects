export interface NormalCardInfo {
  fName: string;
  lName: string;
  fullName: string;
  check: boolean;
  id: number;
  country: string;
  style: FontStyle;
}
export interface FontStyle {
  bg: string;
  fSize: string;
  fColor: string;
}
export interface ProfileInfo {
  fullName: string;
  phoneNum: string;
  email: string;
  residence: string;
  check: boolean;
  style: FontStyle;
}
export const Items: any[] = [
  {
    category: "Skills",
    skill: [
      { fullName: 'Steve Harrison', id: 1, name: 'Organized', bool: false },
      { fullName: 'Steve Harrison', id: 2, name: 'Reading proof', bool: false },
      { fullName: 'Steve Harrison', id: 3, name: 'Hardworking', bool: false },
      { fullName: 'Steve Harrison', id: 4, name: 'Team worker', bool: false },
      { fullName: 'Steve Harrison', id: 5, name: 'Artistic', bool: false },
      { fullName: 'Steve Harrison', id: 6, name: 'Foreign languages', bool: false },
    ]
  },
  {
    category: "Professional Experience",
    skill: [
    { fullName: 'Steve Harrison', id: 7, name: 'Translator', bool: false },
    { fullName: 'Steve Harrison', id: 8, name: 'Chef', bool: false },
    {
      fullName: 'Steve Harrison',
      id: 9,
      name: 'Marketing and Managment',
      bool: false,
    },
    {
      fullName: 'Steve Harrison',
      id: 10,
      name: 'Regulatory affairs',
      bool: false,
    },
    ],
  },

];
