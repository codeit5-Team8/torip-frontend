export const AUTH_VALIDATION_REGEX = {
  name: /^[a-zA-Z가-힣]+$/, // 이름: 한글/영문 허용
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/, // 이메일 형식
  password: /^[a-zA-Z0-9]+$/, // 비밀번호: 대소문자 구분 없이 영문+숫자};
};
