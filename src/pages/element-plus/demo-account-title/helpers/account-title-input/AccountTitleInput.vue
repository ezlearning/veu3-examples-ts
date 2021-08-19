<template>
  <div ref="container" class="ati-container" :style="style">
    <div
      class="el-input el-input--mini el-input--suffix"
      :class="{ 'is-disabled': disabled || readonly || !valid }"
    >
      <input
        ref="input"
        v-model="inputValue"
        :disabled="disabled || readonly || !valid"
        class="el-input__inner account-title"
        :class="{ 'account-title__show-name': showName, readonly }"
        contenteditable="true"
        maxlength="60"
        @input="onInput"
        @blur="onBlur"
        @focus="onFocus"
        @keydown="onKeyDown"
        @click="onFocus"
        @compositionstart="onComposition"
        @compositionupdate="onComposition"
        @compositionend="onComposition"
      />
      <span class="el-input__suffix">
        <span
          v-if="showClear && !(disabled || readonly || !valid) && inputValue"
          class="el-input__suffix-inner"
        >
          <i
            class="el-input__icon el-icon-circle-close el-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
        </span>
      </span>
    </div>
    <div
      v-if="showName"
      ref="nameEl"
      class="selected-name"
      :class="{ readonly }"
    >
      <el-tooltip
        :disabled="!showTooltip"
        :content="selectedOption ? selectedOption.sbjName : ''"
        placement="top-start"
      >
        <span>
          {{ selectedOption ? selectedOption.sbjName : "" }}
        </span>
      </el-tooltip>
      <div ref="nameHelperEl" class="name-helper">
        {{ selectedOption ? selectedOption.sbjName : "" }}
      </div>
    </div>
    <div
      v-show="showDropdown"
      class="dropdown"
      :style="dropdownStyle"
      @blur="showDropdown = false"
    >
      <ul v-if="options" ref="dropdown" class="dropdown-menu">
        <li v-if="options.length === 0" class="dropdown-menu-item">
          无匹配结果
        </li>

        <li
          v-for="(opt, index) in options"
          :key="opt.sbjCode"
          role="button"
          tabindex="-1"
          class="dropdown-menu-item"
          :class="{
            current: selectedOption && selectedOption.sbjCode === opt.sbjCode,
            selected: index === focusId,
          }"
          @mousedown.prevent="onSelect(opt)"
        >
          {{ opt.showCode }}
          -
          {{ opt.showName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./AccountTitleInput"></script>
<style lang="scss" scoped src="./AccountTitleInput.scss"></style>
