import { Player } from "../players";

export interface PlayerRepository {
  getPlayers(): Promise<Player[]>;
}
