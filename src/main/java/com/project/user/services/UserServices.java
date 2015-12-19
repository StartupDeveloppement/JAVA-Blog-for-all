package com.project.user.services;

import com.project.user.dao.UserAuthDao;
import com.project.user.dao.UserAuthDaoImpl;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.UserProfileDaoImpl;
import com.project.user.entity.User;
import com.project.user.entity.UserAuth;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import static org.apache.commons.codec.digest.DigestUtils.md5Hex;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

/**
 * Created by olivier on 26/11/2015.
 */
@Path("/user")
public class UserServices {

    public final String key = "TheOliverUnbreakableKey";
    public UserAuthDao userAuthDao = new UserAuthDaoImpl();
    public UserProfileDao userProfileDao = new UserProfileDaoImpl();

    @POST
    @Path("/authenticate")
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public TokenUtils doAuthentication(@FormParam("email") String email, @FormParam("password") String password){
        //String token = email+":"+password;
        TokenUtils tokenUtils = null;
        UserAuth retrievedUser = userAuthDao.read(email);
        if (retrievedUser==null)
            return null;
        if (retrievedUser.getPassword().equals(password)) {
            String username = userProfileDao.findProfileUsingUserEmail(email).getFirstname();
            String token = email + ":" + username + ":" + md5Hex(email + ":" + password + ":" + key);
            byte[] bytesToken = token.getBytes(StandardCharsets.UTF_8);
            String encodedToken = Base64.getEncoder().encodeToString(bytesToken);
                    System.out.println(username);
                    System.out.println(token);
                    System.out.println(encodedToken);
                    System.out.println(email);
                    System.out.println(password);
            tokenUtils = new TokenUtils();
            tokenUtils.setToken(encodedToken);
        }
        return tokenUtils;
    }
}
