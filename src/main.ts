import { TerminalController } from "./controllers/TerminalController";

async function main() {
  const controller = new TerminalController();
  await controller.iniciarMenu();
}

main();