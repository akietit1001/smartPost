<template>
  <div class="wrapper">
    <div class="title">
      <span>基本情報</span>
      <span class="exit">このページを終了</span>
    </div>
    <div>
      <span class="info-user-title">黒須太郎の情報</span>
      <div class="label-avt">アイコン</div>
      <div class="avt-box">
        <Avatar />
        <Button :text="'ファイルを選ぶ'" />
      </div>
    </div>
    <div class="inner">
      <div class="name">
        <div class="box">
          <div class="label">氏名</div>
          <div class="content">黒須 太郎</div>
        </div>
        <ModalEditName title="氏名の編集" :style="stylesBtn" />
      </div>
      <div class="email">
        <div class="box">
          <div class="label">メールアドレス</div>
          <div class="content">xxxxx@xid.inc</div>
        </div>
        <Button :style="stylesBtn" :text="'変更する'" />
      </div>
      <div class="password">
        <div class="box">
          <div class="label">パスワード</div>
          <div class="content" typeof="password">12345</div>
        </div>
        <ModalEditPassword title="パスワードの更新" :style="stylesBtn" />
      </div>
      <div class="role">
        <div class="box">
          <div class="label">ロール</div>
          <div class="content">カスタムロール</div>
        </div>
        <ModalEditRole :style="stylesBtn" title="役割の編集" />
      </div>
      <div class="group">
        <div class="box">
          <div class="label">グループ</div>
          <div class="content">
            <span>
              グループ A
            </span>
            <span>
              グループ B
            </span><span>
              グループ C
            </span>
          </div>
        </div>
        <Button :style="stylesBtn" :text="'変更する'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import Avatar from './Avatar.vue';
import ModalEditName from './ModalEditName.vue';
import ModalEditRole from './ModalEditRole.vue';
import ModalEditPassword from './ModalEditPassword.vue'
const stylesBtn = {
  padding: '10px 48px',
  marginRight: '10px'
}
</script>

<style scoped>
.title{
  display: flex;
  justify-content: space-between;
  margin: 30px 0 25px 0;
}

.exit{
  color: #D8000C;
}

.exit:hover{
  cursor: pointer;
  text-decoration: underline #D8000C;
}

.avatar-lg {
    width: 5rem;
    height: 5rem;
}
.avt-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 10px
}

.info-user-title{
  font-size: 20px;
}

.label-avt{
  margin: 10px 0;
  border-bottom: 1px solid #DDDDDD;
}

.name, .email, .password, .role, .group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  border-bottom: 1px solid #DDDDDD;
}

.inner{
  display: flex;
  flex-direction: column;
}

.box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.label{
  color: #666666;
  font-size: 12px;
  margin-bottom: 5px;
}
.content{
  font-size: 14px;
}
</style>