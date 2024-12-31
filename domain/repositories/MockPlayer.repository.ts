import { BuildPlayers } from "@/data/PlayersBuilder";
import { Player } from "../players";
import { PlayerRepository } from "./Player.repository";

export function MockPlayerRepository(): PlayerRepository {
  const getPlayers = () =>
    new Promise<Player[]>((resolve) => {
      setTimeout(() => {
        resolve(BuildPlayers(10));
      }, 300);
    });

  return { getPlayers };
}
