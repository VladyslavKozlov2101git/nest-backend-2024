import { Module } from '@nestjs/common'

import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'
import { PomodoroModule } from './pomodoro/pomodoro.module'
import { TimeBlockModule } from './time-block/time-block.module'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TaskModule,
		TimeBlockModule,
		PomodoroModule
	]
})
export class AppModule {}
