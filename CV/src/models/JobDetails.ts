export interface JobDetails {
    title: string;  
    display:boolean;             
    firm?: string;           
    team?: string;           
    location?: string;       
    date: string;           
    pro_skills?: string[];    
    tech_skills?: string[];   
    description?: string;
  }

export const SKILL_MODE: "pro" | "tech" | "all" | null = "pro"

export function getAllSkills(job: JobDetails): string[] {
  return [
    ...(SKILL_MODE !== "tech" ? (job.pro_skills ?? []) : []),
    ...(SKILL_MODE !== "pro" ? (job.tech_skills ?? []) : [])
  ];
}
  