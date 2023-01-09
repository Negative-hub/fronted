/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDto {
  id: number;
  name: string;
  email: string;
}

export interface CreateColumnDto {
  title: string;
  description: string;
}

export interface UpdateColumnDto {
  id: number;
  title: string;
  description: string;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  /** @format date-time */
  finished_at?: string;
  column_id: number;
  user_id: number;
}

export interface UpdateTaskDto {
  id: number;
  title: string;
  description: string;
  /** @format date-time */
  finished_at?: string;
  column_id: number;
}

export type LoginUserDto = object;
