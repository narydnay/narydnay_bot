
import { config } from "../../../config/server";
import { routers } from "../../admin/controllers/admin";
import { botController } from "../controllers/telegram";

routers.post('/bot', botController.post )
