import { Badge } from "../types/badges.type";

export interface Task {
    id: number;
    user: {
        name: string,
        image: string
    }
    title: string;
    description: string;
    badge: Badge;
    status: string;
}