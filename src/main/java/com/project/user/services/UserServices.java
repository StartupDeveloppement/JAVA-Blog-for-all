package com.project.user.services;

import com.project.user.dao.UserAuthDao;
import com.project.user.dao.impl.UserAuthDaoImpl;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.dto.TokenUtilsDto;
import com.project.user.dto.UserAuthenticationDto;
import com.project.user.entity.UserAuth;
import com.project.user.entity.UserProfile;

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
    public TokenUtilsDto doAuthentication(@FormParam("email") String email, @FormParam("password") String password){

        TokenUtilsDto tokenUtilsDto = null;
        UserProfile retrieveUserProfile = null;
        UserAuth retrievedUser = userAuthDao.read(email);
        if (retrievedUser==null)
            return null;
        if (retrievedUser.getPassword().equals(password)) {
            retrieveUserProfile = userProfileDao.findProfileUsingUserEmail(email);
            String username = retrieveUserProfile.getFirstname();
            String token = email + ":" + username + ":" + md5Hex(email + ":" + password + ":" + key);
            byte[] bytesToken = token.getBytes(StandardCharsets.UTF_8);
            String encodedToken = Base64.getEncoder().encodeToString(bytesToken);
            String profileToken =
                    retrieveUserProfile.getProfileName()+":"+
                    retrieveUserProfile.getProfilePicture()+":"+
                    retrieveUserProfile.getCountry()+":"+
                    retrieveUserProfile.getLanguage();
            byte[] bytesProfileToken = profileToken.getBytes(StandardCharsets.UTF_8);
            String encodedProfileToken = Base64.getEncoder().encodeToString(bytesProfileToken);
                    System.out.println(username);
                    System.out.println(token);
                    System.out.println(encodedToken);
                    System.out.println(email);
                    System.out.println(password);
            tokenUtilsDto = new TokenUtilsDto();
                tokenUtilsDto.setS("s=" + encodedToken+"; path=/"); //the 'path=/' make the cookie global
                tokenUtilsDto.setSp("sp=" + encodedProfileToken+"; path=/");

        }
        return tokenUtilsDto;
    }

    @POST
    @Path("/checkauthentication")
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public UserAuthenticationDto checkAuthentication(@FormParam("email") String email){
        UserAuthenticationDto userAuthenticationDto = new UserAuthenticationDto();
        UserAuth retrievedUser = userAuthDao.read(email);
        if (retrievedUser==null)
            userAuthenticationDto.setAuthenticate(false);
        else
            userAuthenticationDto.setAuthenticate(true);
        return userAuthenticationDto;
    }
}
