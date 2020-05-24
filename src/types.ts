export interface entry {
    description: string;
    date: number;
    time: string;
    calories: number;
}


interface weightEntry {
    date: Date;
    weight: number;   
}


enum Effort {
    Sedentary = 1.2,
    Light = 1.4,
    Moderate = 1.5,
    Heavy = 1.7,
    Extreme = 1.8
  }

 export enum Gender {
    Male = 1,
    Female = 0
}

enum Objective {
    Gain = 1.3,
    Neutral = 1.0,
    Loss = 0.8
  }

export interface user {
    firstname: string;
    lastname: string;
    entries: [entry];
    gender: Gender;
    height: number;
    weights: [weightEntry];
    effort: Effort;
    objective: Objective;
}
