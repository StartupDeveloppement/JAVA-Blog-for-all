package com.project.user.dao;

import com.common.Dao;
import com.project.user.entity.UserProfile;

/**
 * Created by olivier on 10/12/2015.
 */
public interface UserProfileDao extends Dao<UserProfile,String> {

    UserProfile findProfileUsingUserEmail(String email);
}
