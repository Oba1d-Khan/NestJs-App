import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {


    @Get('')  // Get all users on ---> /users
    findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | 'ENGINEER') {
        return []
    }

    @Get(':id')  // Get a user on ---> /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post('')   // Post a user on ---> /users
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id')    // update a user on ---> /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }  //!
    }

    @Delete(':id')   // Delete a user on ---> /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }

}
