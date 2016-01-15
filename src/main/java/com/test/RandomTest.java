package com.test;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.entity.Article;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserProfile;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

/**
 * Created by olivier on 15/01/2016.
 */
public class RandomTest {

    public static void main (String[] args){

        String search = "les la";
        List<String> requestList = new ArrayList<String>();
        StringTokenizer st = new StringTokenizer(search);
        while (st.hasMoreTokens()){
            requestList.add(st.nextToken());
        }


        for (String str : requestList){
            System.out.println(str);
        }
    }
}
