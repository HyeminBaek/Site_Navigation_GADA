# My Friend ChatBot! / CNN 기반 인공지능 챗봇을 이용한 언어 학습 프로그램

**프로젝트 개요**  
One Paragraph of project description goes here / 프로젝트의 전반적인 내용에 대한 요약을 여기에 적습니다

## 📅 Project Period / 프로젝트 기간

### 2020.12.31~2021.02.28

## 💡 Used skill / 사용된 기술들

### 기능 -기술; 담당자 배개민
### 기능 - node.js; 담당자 백혜민,이정혁

```
예시
```

## 🙋 Project teammate / 프로젝트 팀원

> [백혜민](https://github.com/HyeminBaek) ☞ 아이디어 기획,블라블라 담당
###
> [이정혁](https://github.com/wjdgurrj) ☞ 

```
예시
```

## 프로젝트 소개
1.기능
1) 챗봇과 대화
스샷
~을 구현하기 위해 ~ 기술을 사용했으며 결과는 다음과 같다.
구현 과정에서 ~ 문제점이 있었고 ~은 잘된 것 같다.

## 프로젝트 기술 설명
1) 회원가입 및 로그인
DB에 저장,회원 구분
2) 웹 애플리케이션
노드 제이에스, 로컬 서버
3) 챗봇
cnn
4) 채팅방 생성 기능
5) 다른 이용자와 대화 

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

### 테스트는 이런 식으로 작성하시면 됩니다

```
예시
```

## Deployment / 배포

Add additional notes about how to deploy this on a live system / 라이브 시스템을 배포하는 방법

## Built With / 누구랑 만들었나요?

* [이름](링크) - 무엇 무엇을 했어요
* [Name](Link) - Create README.md

## Contributiong / 기여

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. / [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) 를 읽고 이에 맞추어 pull request 를 해주세요.

## License / 라이센스

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/PurpleBooth/LICENSE.md) file for details / 이 프로젝트는 MIT 라이센스로 라이센스가 부여되어 있습니다. 자세한 내용은 LICENSE.md 파일을 참고하세요.

## Acknowledgments / 감사의 말

* Hat tip to anyone whose code was used / 코드를 사용한 모든 사용자들에게 팁
* Inspiration / 영감
* etc / 기타
