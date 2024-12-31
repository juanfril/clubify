import { Player, Position } from "@/domain/players";
import { faker } from "@faker-js/faker/.";

export function BuildPlayer(): Player {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    position: faker.helpers.enumValue(Position),
    shirtNumber: faker.number.int({ min: 1, max: 20 }),
  };
}

export function BuildPlayers(count: number): Player[] {
  return Array.from({ length: count }, () => BuildPlayer());
}
