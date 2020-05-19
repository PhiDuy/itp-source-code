/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
import moment from "moment";

export const name = "HomePage";

const initialState = freeze({
  isGenerateYear: false,
  isCanPrevStage: false,
  isCanNextStage: true,
  isProgressing: false,
  isGetPostsSuccess: false,
  isGetStagesSuccess: false,
  isGetPostsOnNavbar: false,
  isGettingMorePost: false,
  toggleModal: false,
  /*------------------*/
  transform: 0.163413,
  pcBackground: null,
  mobileBackground: null,
  maxQuantity: {},
  curPage: 0,
  curYear: {},
  data: {},
  curPost: {},
  posts: [],
  stages: [],
  timelineStones: []
});

export default handleActions(
  {
    [actions.toggleModal]: (state, action) => {
      if (state.toggleModal) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return freeze({
        ...state,
        toggleModal: !state.toggleModal
      });
    },
    /*---
    ----- Handle Page Change
    */
    [actions.handlePageChange]: (state, action) => {
      return freeze({
        ...state,
        curPage: action.payload
      });
    },
    /*---
    ----- Handle Clear Unmount
    */
    [actions.handleClearUnmount]: (state, action) => {
      return freeze({
        ...state,
        isProgressing: false,
        isGetPostsSuccess: false,
        isGettingMorePost: false,
        toggleModal: false,
        maxQuantity: {},
        curPage: 0,
        curYear: {},
        data: {},
        curPost: {},
        posts: []
      });
    },
    /*---
    ----- Handle Clear
    */
    [actions.handleClear]: (state, action) => {
      if (action.payload === "posts") {
        return freeze({
          ...state,
          isGetPostsSuccess: false
        });
      }

      if (action.payload === "stages") {
        return freeze({
          ...state,
          isGetStagesSuccess: false
        });
      }

      if (action.payload === "onChangeStage") {
        return freeze({
          ...state,
          isGetPostsOnNavbar: false
        });
      }

      if (action.payload === "generateYear") {
        return freeze({
          ...state,
          isGenerateYear: false
        });
      }

      return freeze({
        ...state
      });
    },
    /*---
    ----- Handle Generate Year
    */
    [actions.handleGenerateYear]: (state, action) => {
      let timelineStones = [];
      for (let i = 2010; i < moment().year() + 1; i++) {
        timelineStones.push({
          value: i,
          label: i
        });
      }

      return freeze({
        ...state,
        curYear: timelineStones[0],
        timelineStones,
        isGenerateYear: true
      });
    },
    /*---
    ----- Handle Current Post
    */
    [actions.handleCurPost]: (state, action) => {
      return freeze({
        ...state,
        curPost: action.payload
      });
    },
    /*---
    ----- Handle Current Stage
    */
    [actions.handleCurYear]: (state, action) => {
      if (action.payload.type === "normal") {
        let timelineStones = [...state.timelineStones];
        let value = action.payload.data.value;
        const index = timelineStones.findIndex(item => item.value === value);
        let newTransform = 0.071428 * index + 0.163413;
        if (index !== -1) {
          if (index >= timelineStones.length) {
            return freeze({
              ...state,
              isCanPrevStage: true,
              isCanNextStage: false,
              transform: newTransform,
              curYear: action.payload.data
            });
          } else if (index <= 0) {
            return freeze({
              ...state,
              isCanPrevStage: false,
              isCanNextStage: true,
              transform: newTransform,
              curYear: action.payload.data
            });
          } else {
            return freeze({
              ...state,
              isCanPrevStage: true,
              isCanNextStage: true,
              transform: newTransform,
              curYear: action.payload.data
            });
          }
        }
        return freeze({
          ...state
        });
      }
      if (action.payload.type === "prev") {
        let timelineStones = [...state.timelineStones];
        let transform = state.transform;
        let value = action.payload.data.value - 1;
        const index = timelineStones.findIndex(item => item.value === value);
        if (index !== -1) {
          let newTransform;
          if (transform > 0.071428) {
            newTransform = transform - 0.071428;
          } else {
            newTransform = transform;
          }
          if (index === 0) {
            return freeze({
              ...state,
              transform: newTransform,
              isCanPrevStage: false,
              isCanNextStage: true,
              isGetPostsOnNavbar: true,
              curYear: timelineStones[index]
            });
          } else {
            return freeze({
              ...state,
              transform: newTransform,
              isCanNextStage: true,
              isCanPrevStage: true,
              isGetPostsOnNavbar: true,
              curYear: timelineStones[index]
            });
          }
        } else {
          return freeze({
            ...state,
            isCanPrevStage: false,
            isCanNextStage: true
          });
        }
      }
      if (action.payload.type === "next") {
        let timelineStones = [...state.timelineStones];
        let transform = state.transform;
        let value = action.payload.data.value + 1;
        const index = timelineStones.findIndex(item => item.value === value);
        if (index !== -1) {
          let newTransform = transform + 0.071428;
          if (index === timelineStones.length) {
            return freeze({
              ...state,
              transform: newTransform,
              isCanNextStage: false,
              isCanPrevStage: true,
              isGetPostsOnNavbar: true,
              curYear: timelineStones[index]
            });
          } else {
            return freeze({
              ...state,
              transform: newTransform,
              isCanNextStage: true,
              isCanPrevStage: true,
              isGetPostsOnNavbar: true,
              curYear: timelineStones[index]
            });
          }
        } else {
          return freeze({
            ...state,
            isCanPrevStage: true,
            isCanNextStage: false
          });
        }
      }
    },
    /*---
    ----- Handle Input Change
    */
    [actions.handleInputChange]: (state, action) => {
      let event = action.payload;
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      return freeze({
        ...state,
        data: {
          ...state.data,
          [name]: value
        }
      });
    },
    /*---
    ----- Get Background
    */
    [actions.getBackgroundSuccess]: (state, action) => {
      return freeze({
        ...state,
        pcBackground: action.payload.pcBackground,
        mobileBackground: action.payload.mobileBackground
      });
    },
    /*---
    ----- Get Posts By Stage
    */
    [actions.getPostsByYear]: (state, action) => {
      let curYear = state.curYear;
      let isGetPostsOnNavbar = state.isGetPostsOnNavbar;

      if (
        curYear.value === action.payload.value &&
        isGetPostsOnNavbar === false
      ) {
        return freeze({
          ...state,
          isGettingMorePost: true,
          isGetPostsSuccess: false
        });
      }
      return freeze({
        ...state,
        isProgressing: true,
        isGetPostsSuccess: false
      });
    },
    [actions.getPostsByYearSuccess]: (state, action) => {
      let temptMaxQuantity = action.payload.pop();
      let isGettingMorePost = state.isGettingMorePost;
      if (isGettingMorePost) {
        let newPost = [...state.posts];
        newPost = [...newPost, ...action.payload];
        return freeze({
          ...state,
          isGettingMorePost: false,
          isGetPostsSuccess: true,
          posts: newPost,
          maxQuantity: temptMaxQuantity.maxQuantity
        });
      } else {
        return freeze({
          ...state,
          isProgressing: false,
          isGetPostsSuccess: true,
          posts: action.payload,
          maxQuantity: temptMaxQuantity.maxQuantity
        });
      }
    },
    [actions.getPostsByYearFail]: (state, action) => {
      return freeze({
        ...state,
        isProgressing: false,
        isGetPostsSuccess: false
      });
    }
  },
  initialState
);
