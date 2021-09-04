<template>
  <header>
    <!-- header inner -->
    <div class="header">
      <div class="white_bg">
        <div id="banner1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container-fluid">
                <div class="carousel-caption" id="center-align">
                  <div class="col-md-12 col-lg-12">
                    <div class="text-bg">
                      <div class="div-align">
                        <span>잔액</span>
                        <span class="span-blank">빈공간</span>
                        <span>{{ total }}원</span>
                      </div>
                      <div id="div-wallet">
                        <table class="table-width">
                          <tr>
                            <th>이번달 인센티브</th>
                            <td class="td-align">{{ incentiveOfMonth }}원</td>
                          </tr>
                          <tr>
                            <th>이번달 충전금액</th>
                            <td class="td-align">{{ chargeOfMonth }}원</td>
                          </tr>
                        </table>

                        <table class="table-width">
                          <tr>
                            <td class="td-float">
                              <a class="read_more span-btn" href="Charge">
                                충전</a
                              >
                            </td>

                            <td>
                              <a class="read_more span-btn" href="Payment">
                                결제</a
                              >
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="carousel-wallet">
              <div class="col-md-12 col-12">
                <div class="text-bg">
                  <span class="span-blank">빈</span>
                  <span
                    ><img
                      class="img-size"
                      src="images/services_icon3h.png"
                      alt="#"
                    />
                    BZ</span
                  >
                  <div class="container-flex" id="span-wallet">
                    <div class="items">
                      <img
                        class="img-size hidden"
                        src="images/services_icon3h.png"
                        alt="#"
                      />MY BZ
                    </div>

                    <div class="items">
                      {{ myBz
                      }}<img
                        class="img-size"
                        src="images/services_icon3h.png"
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
    <div>
      <!-- <span
        ><a class="read_more" href="#"
          ><img src="images/btn_h.png" alt="#" /> 내역</a
        ></span
      >
      <span
        ><a class="read_more" href="#"
          ><img src="images/btn_h.png" alt="#" /> 리뷰</a
        ></span
      > -->
      <div class="span-blank">빈공간</div>

      <table class="table-width">
        <tr>
          <td class="td-float">
            <a class="read_more tb-btn" href="Use"
              ><img src="images/btn_h.png" alt="#" /> 내역</a
            >
          </td>
          <td class="span-blank"></td>
          <td>
            <a class="read_more tb-btn" href="Review"
              ><img src="images/btn_h.png" alt="#" /> 리뷰</a
            >
          </td>
        </tr>
      </table>

      <div class="span-blank">빈공간</div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      total: "300,000",
      incentiveOfMonth: "10,000",
      chargeOfMonth: "100,000",
      myBz: 33,
    };
  },
  methods: {},
};
</script>
