export enum Position {
  GOALKEEPER = "Goalkeeper",
  DEFENDER = "Defender",
  MIDFIELDER = "Midfielder",
  FORWARD = "Forward",
}

export interface Player {
  id: string;
  name: string;
  position: Position;
  shirtNumber: number;
}
