package com.service;

import com.domain.Topic;
import com.mapper.TopicMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Wanglei on 15/11/28.
 */
@Service
public class TopicService {
    @Autowired
    private TopicMapper topicMapper;

    public List<Topic> getTopicList(){
        return topicMapper.findTopicList();
    }
}
