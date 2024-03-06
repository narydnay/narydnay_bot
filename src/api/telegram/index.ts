import { Telegraf } from "telegraf";
import { config } from "../../config/config";

const bot = new Telegraf(config.get('token-bot'));

