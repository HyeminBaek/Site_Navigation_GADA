# 🐱‍🏍GADA

**✔누구나 사이트를 편리하게 이용할 수 있도록 사이트 네비게이션 역할을 하는 도우미 GADA**

## 1.프로젝트 개요

GADA는 사용자의 음성을 인식하여 원하는 페이지로 쉽게 이동할 수 있도록 도와주는 챗봇입니다.

### 📅 Project Period / 프로젝트 기간

**2020.12.31~2021.02.28**

### 💡 Used skill / 사용된 기술들

**기능 -기술; 담당자 배개민**

**기능 - node.js; 담당자 백혜민, 이정혁**

**DB 관리 - 이정혁**

```
예시
```

### 🙋 Project teammate / 프로젝트 팀원

> [백혜민](https://github.com/HyeminBaek) ☞ 아이디어 기획,유스케이스 시나리오 및 다이어그램 작성, 클래스 다이어그램 

> [이정혁](https://github.com/wjdgurrj) ☞ 아이디어 기획

## 2. 프로젝트 소개
✔ 기능
1) 챗봇과 대화
스샷
~을 구현하기 위해 ~ 기술을 사용했으며 결과는 다음과 같다.
구현 과정에서 ~ 문제점이 있었고 ~은 잘된 것 같다.

유스케이스 다이어그램

![g](https://user-images.githubusercontent.com/55080554/103436860-ad6ce400-4c63-11eb-8eb9-252ce256372c.png)

## 3. 프로젝트 기술 설명
1) 회원가입 및 로그인

사이트를 이용하는 액터는 사용자와 운영자, 두 분류로 나눌 수 있습니다.
회원가입은 사용자 계정과 운영자 계정을 구분하기 위해 작성하였습니다.

각 계정 별 접근 방식은 다음과 같습니다.

- 사용자 계정
회원가입에 기입한 아이디와 비밀번호로 로그인

- 운영자 계정
회원가입을 별도로 하지 않고 root(아이디),root(비밀번호)로 로그인

회원가입 폼에 기입된 사용자 정보와 운영자 정보를 담고 관리하기 위해 USER DB 테이블을 제작하였습니다.

이때 USER DB를 두 사람(백혜민,이정혁)이 공유하기 위해,즉 동일한 DB에서 작업하기  SQLyog를 사용하였습니다.

~기술블라블라 를 이용하였습니다.

제일 처음에 보여지는 메인화면은 다음과 같습니다 ☞ login.ejs
![로그인](https://user-images.githubusercontent.com/55080554/104297089-c8faa900-5505-11eb-81bd-02c536177941.jpg)

회원가입 화면은 다음과 같습니다 ☞ join.ejs
![image](https://user-images.githubusercontent.com/55080554/104696065-043ce800-5751-11eb-8c4c-64fa0f09367d.png)

로그인 성공 시 화면은 다음과 같습니다.
- 사용자 계정 ☞ user.ejs
![image](https://user-images.githubusercontent.com/55080554/104812519-19e00980-5846-11eb-9118-df43774f5eaa.png)

사용자 계정의 화면은 다음을 포함합니다 - GADA 서비스, GADA URL 추가 요청

- 운영자 계정 ☞ admin.ejs


운영자 계정의 화면은 다음을 포함합니다 - GADA 서비스, 요청받은 GADA URL 목록 확인

각 계정 로그인 시 사용자의 아이디를 확인하여 아이디 별(사용자 or 운영자)로 별도의 페이지로 접속되도록  하였습니다.
이를 구현하기 위해 node.js로 블라블라 하였습니다.

로그인 실패 시 alert message 를 띄우게 되며, 정상적으로 서비스를 이용할 수 없게 됩니다.
메인.nodejs에 알럴트 뜬 형태

2) 로그인 후 GADA 서비스 요청
GADA URL 추가 요청 시 사용자가 입력한 기능과 사유, 사용자 ID가 url_user 테이블에 저장됩니다.


2) 웹 애플리케이션
노드 제이에스, 로컬 서버
3) 챗봇
cnn
4) 채팅방 생성 기능
5) 다른 이용자와 대화 

## 4. DB 목록

1) userinfo: 회원 가입 저장용 DB
id,pwd
2) : 사용자 url 추가 요청이 저장되는 DB
이용자 ID, 기능, 이유
3) : GADA 알고리즘에 활용되는 DB
url, 

## 4. 기타등등
## 프로젝트를 수행하면서 어려웠던 점
`1. 타 DB 접근 문제 : 방화벽 문제로 인해 계속 '이정혁'이 만든 DB에 '백혜민'이 접근이 안되었다.`

## 프로젝트 보안점
## 한 줄 느낀점



시각장애인,노령층

온라인 네비게이션 GADA

1. 사용자
역할) GADA 에게 질문을 던지는 역할, GADA가 원하는 사이트를 찾아주었는지 평가자

2. 운영자 
역할) GADA 에게 딕셔너리 형태로 소스 제공 ex. '네이버':'https://www.naver.com'

3. GADA
역할) 사용자 음성을 인식하여 사이트로 이동시킴, 이동이 완료된 후 alert 형태로 별점 평가

#기능
1)음성받기
2)음성인식 및 형태소 분석
3)형태소를 DB내 링크와 연동
4)딕셔너리 형태를 DB에 저장
5)저장된 url로 이동

#시나리오
1. "가다야~"라고 하면 음성인식이 시작됨, 이때 화면에 음성인식이 시작되고 있음을 표시해줌
2. 가다- "네~"라고 음성메시지를 내보내주어서 사용자가 음성 인식이 시작됨을 인식할 수 있게 함
3. 사용자- "네이버 카페로 이동해줘~"
4. 가다 - 음성을 입력받고 이것을 corpus 단위로 나눈다
4. 2의 예상 결과물- 네이버/카페로/이동해줘
5. 전치사 및 불필요한 것들 제거 -> 네이버 카페 이동
6. 5의 결과물을 DB내 단어들과 매칭시켜 봄
7. 매칭되는 결과가 있는 경우-key 값과 매칭되는 value 값으로 이동
8. 없는 경우- 가다가 "원하는 결과를 찾지 못했어요, 운영자에게 추가를 요청하시겠어요?"
8-1. 메시지박스 YES/NO
8-2. YES 선택 시 텍스트 상자가 띄워지고 사용자가 submit 시 DB내 테이블에 요청이 저장됨
8-3. NO 선택 시 챗봇 종료



## Running the tests / 테스트의 실행

어떻게 테스트가 이 시스템에서 돌아가는지에 대한 설명을 합니다

### 테스트는 이런 식으로 동작합니다

왜 이렇게 동작하는지, 설명합니다

```
예시
```
``` npm install mysql ```
