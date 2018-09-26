/*
 * @Author: Reviving-Pain-Laptop
 * @Date: 2018-09-26 12:35:31
 * @Last Modified by: Reviving-Pain-Laptop
 * @Last Modified time: 2018-09-26 18:05:06
 */

import http from './apiUtil.js'

export default {
  // 【用户】token验证
  verifyAccesstoken: function (data, resolve, reject) {
    http.ajaxRequest('/accesstoken', 'post',
      {},
      data,
      resolve,
      reject
    )
  },
  // 【用户】请求用户基本信息
  getUserInfo: function (userName, resolve, reject) {
    http.ajaxRequest('user/' + userName, 'get',
      {},
      {},
      resolve,
      reject
    )
  },
  // 【用户】获取指定用户所收藏的文章
  getUserCollectedTopic: function (userName, resolve, reject) {
    http.ajaxRequest('/topic_collect/' + userName, 'get',
      {},
      {},
      resolve,
      reject
    )
  },
  // 【操作】给评论点赞
  commentLike: function (replyId, data, resolve, reject) {
    http.ajaxRequest('/reply/' + replyId + '/ups', 'post',
      {},
      data,
      resolve,
      reject
    )
  },
  // 【操作】收藏文章
  collectTopic: function (data, resolve, reject) {
    http.ajaxRequest('/topic_collect/collect', 'post',
      {},
      data,
      resolve,
      reject
    )
  },
  // 【操作】取消文章收藏
  deCollectTopic: function (data, resolve, reject) {
    http.ajaxRequest('/topic_collect/de_collect', 'post',
      {},
      data,
      resolve,
      reject
    )
  },
  // 【操作】发布评论
  createComment: function (topicId, data, resolve, reject) {
    http.ajaxRequest('/topic/' + topicId + '/replies', 'post',
      {},
      data,
      resolve,
      reject
    )
  },
  // 【操作】发布文章
  createTopic: function (data, resolve, reject) {
    http.ajaxRequest('topics', 'post',
      {},
      data,
      resolve,
      reject
    )
  },
  // 【文章】获取文章详情
  getTopicDetail: function (articleId, resolve, reject) {
    http.ajaxRequest('topic/' + articleId, 'get',
      {},
      {},
      resolve,
      reject
    )
  },
  // 【文章】获取CNode首页文章列表
  getCnodeTopics: function (params, resolve, reject) {
    http.ajaxRequest('/topics', 'get',
      params,
      {},
      resolve,
      reject
    )
  }
}