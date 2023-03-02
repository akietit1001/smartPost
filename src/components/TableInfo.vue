<template>
  <div class="wrapper">
    <NavSubVue title="管理者情報"/>
    <div>
      <span class="info-user-title">黒須太郎の情報</span>
      <div class="label-avt">アイコン</div>
      <div class="avt-box">
        <Avatar />
        <Button :text="'ファイルを選ぶ'" :primary="ref(true).value" />
      </div>
    </div>
    <div class="inner">
      <p class="basic-title">基本情報</p>
      <div class="name">
        <div class="box">
          <div class="label">氏名</div>
          <div class="content">黒須 太郎</div>
        </div>
        <ModalEditName title="氏名の編集" />
      </div>
      <div class="email">
        <div class="box">
          <div class="label">メールアドレス</div>
          <div class="content">xxxxx@xid.inc</div>
        </div>
        <ModalReInvite title="再招待"/>
      </div>
      <div class="password">
        <div class="box">
          <div class="label">パスワード</div>
          <div class="content" typeof="password">12345</div>
        </div>
        <ModalEditPassword title="パスワードの更新" />
      </div>
      <div class="role">
        <div class="box">
          <div class="label">ロール</div>
          <div class="content">カスタムロール</div>
        </div>
        <ModalEditRole title="役割の編集" />
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
        <ModalEditGroup title="グループの設定"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavSubVue from './NavSub.vue';
import Button from './Button.vue'
import Avatar from './Avatar.vue';
import ModalEditName from './ModalEditName.vue';
import ModalEditRole from './ModalEditRole.vue';
import ModalEditPassword from './ModalEditPassword.vue'
import ModalReInvite from './ModalReInvite.vue';
import ModalEditGroup from './ModalEditGroup.vue'
</script>

<style scoped>

.avatar-lg {
    width: 4rem;
    height: 4rem;
}
.avt-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
}

.basic-title{
  margin: 20px 0 10px 0;
}

.info-user-title{
  font-size: 20px;
}

.label-avt{
  margin: 10px 0;
}

.name, .email, .password, .role, .group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 105px;
  border: 1px solid #DDDDDD;
  padding: 20px
}

.name {
  border-radius: 8px 8px 0 0;
}

.group {
  border-radius: 0 0 8px 8px;
}

.email, .password, .role, .group {
  border-top: none;
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
.box .label{
  color: #666666;
  font-size: 12px;
  margin: 0 0 5px 0 !important;
}
.content{
  font-size: 14px;
}
</style>