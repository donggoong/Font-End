<?php include 'sub_header.php' ?>
<h2 class="sub_title">온라인문의</h2>
<section class="contact_section">
  <p class="site_guide">
    접근성을 고려한 반응형 form UI를 설계하였습니다.<br>
    전송 기능은 구현되지 않은 디자인 페이지입니다.
    <button><i class="fa-solid fa-circle-xmark"></i></button>
  </p>
  <p class="sub_desc">
    <em class="emphasis">궁금하신 사항이나 프로젝트 문의사항을 작성해 주세요.</em>
    담당자가 확인후 빠른 회신을 약속합니다.
  </p>
  <form class="contact_form">
    <fieldset>
      <div>
        <label for="id1">성명</label>
        <div>
          <input id="id1" type="text" placeholder="단체인 경우 회사이름을 입력해주세요." required>
        </div>
      </div>
      <div>
        <label>연락처</label>
        <div class="tel">
          <select>
            <option value="" title="통신사를 하단의 옵션중에서 선택해주세요.">통신사</option>
            <option value="" label="KT">KT</option>
            <option value="" label="SKT">SKT</option>
            <option value="" label="LGU">LGU</option>
            <option value="" label="알뜰폰">알뜰폰</option>
          </select>
          <span>-</span>
          <label for="id2-1" class="hidden">연락처 첫번째 세자리 수를 입력하세요.</label>
          <input required type="tel" id="id2-1" size="1"> <span>-</span>
          <label for="id2-2" class="hidden">연락처 두번째 네자리 수를 입력하세요.</label>
          <input required type="tel" id="id2-2" size="1"> <span>-</span>
          <label for="id2-3" class="hidden">연락처 세번째 네자리 수를 입력하세요.</label>
          <input required type="tel" id="id2-3" size="1">
        </div>
      </div>
      <div>
        <label for="id3">이메일</label>
        <div>
          <input required type="email" id="id3">
        </div>
      </div>
      <div>
        <label>질문분야</label>
        <div>
          <label for="id4-1"><input required type="radio" name="q" id="id4-1"> 웹사이트 제작</label>
          <label for="id4-2"><input required type="radio" name="q" id="id4-2"> 앱 제작</label>
          <label for="id4-3"><input required type="radio" name="q" id="id4-3"> 쇼핑몰 제작</label>
          <label for="id4-4"><input required type="radio" name="q" id="id4-4"> 기타</label>
        </div>
      </div>
      <div>
        <label for="id5">제목</label>
        <div>
          <input required type="text" id="id5">
        </div>
      </div>
      <div>
        <label for="id6">내용</label>
        <div>
          <textarea required id="id6"></textarea>
        </div>
      </div>
      <div>
        <label for="id7">파일첨부</label>
        <div>
          <input type="file" id="id7" accept="image/*" title="이미지 파일만 업로드가 가능합니다.">
        </div>
      </div>
      <div>
        <label>개인정보수집동의</label>
        <div>
          <label for="id8-1">
            <input required type="radio" name="agree" id="id8-1"> 동의
          </label>
          <label for="id8-2">
            <input required type="radio" name="agree" id="id8-2" checked> 미동의
          </label>
        </div>
      </div>
      <div class="btns">
        <button type="submit">문의하기</button>
        <button type="reset">취소</button>
      </div>
    </fieldset>
  </form>
</section>
<?php include 'sub_footer.php' ?>