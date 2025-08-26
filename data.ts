//For later: for sorting, we can convert the elements in an array to strings then compare thier UTF-16 code unit values.

interface user {
    id : number,
    name: string,
    age: number,
    active: boolean,
    skills: string[],
    address: {city: string, country: string}
}

type theme = "Light" | "dark"

interface appConfig {
    appName : string,
    version : string,
    theme : theme,
    languages : string[],
    features: {
    login: boolean,
    payments: boolean,
    chat: boolean,
  }
}



const users: user[] = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    active: true,
    skills: ["React", "Node.js"],
    address: { city: "London", country: "UK" }
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    active: false,
    skills: ["Python", "Django"],
    address: { city: "Lagos", country: "Nigeria" }
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
    active: true,
    skills: ["Go", "Docker", "Kubernetes"],
    address: { city: "Berlin", country: "Germany" }
  },
  {
    id: 4,
    name: "Diana",
    age: 22,
    active: true,
    skills: ["Next.js", "Tailwind"],
    address: { city: "Toronto", country: "Canada" }
  }
];


export const appConfig: appConfig = {
  appName: "Kwikpik",
  version: "1.2.0",
  theme: "dark",
  languages: ["en", "fr", "es"],
  features: {
    login: true,
    payments: true,
    chat: false,
  }
};


export default users