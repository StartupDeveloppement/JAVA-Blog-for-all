package com.project.articles.dto;

import com.project.user.dto.UserProfileResponseDto;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by olivier on 31/01/2016.
 */
@XmlRootElement
public class ArticlesSectionResponseDto {

    private UserProfileResponseDto userProfileResponseDto;
    private List<ArticlesResponseDto> articlesResponseDto;


    public UserProfileResponseDto getUserProfileResponseDto() {return userProfileResponseDto;}
    public void setUserProfileResponseDto(UserProfileResponseDto userProfileResponseDto) {
        this.userProfileResponseDto = userProfileResponseDto;
    }

    public List<ArticlesResponseDto> getArticlesResponseDto() {
        return articlesResponseDto;
    }

    public void setArticlesResponseDto(List<ArticlesResponseDto> articlesResponseDto) {
        this.articlesResponseDto = articlesResponseDto;
    }
}
