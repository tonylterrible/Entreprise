import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {createClient, SupabaseClient} from "@supabase/supabase-js";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private _supabase: SupabaseClient;

  constructor() {
    this._supabase = createClient(environment.supabaseUrl, environment.supbaseKey);
  }


  /**
   * Register of an account
   * Take those parameters :
   * @param email - email of the new user
   * @param password - password of the new user
   * @param username - username of the new user
   */
  async register(email:string, password: string, username:string): Promise<any> {
    return this._supabase.auth.signUp({email, password: password}, {data: {username}});
  }

  /**
   * Login of the user
   * Take those parameters :
   * @param email - email of the user that wants to login
   * @param password -  password of the user that wants to login
   */
  async login(email:string, password: string): Promise<any>{
    return this._supabase.auth.signIn({email, password: password});
  }

  /**
   * Make the user disconnect
   */
  async logout(): Promise<void>{
    await this._supabase.auth.signOut();
  }





}
