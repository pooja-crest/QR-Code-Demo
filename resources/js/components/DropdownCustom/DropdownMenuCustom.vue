<template>
    <transition name="dropdownx">
        <div
            v-if="dropdownVisible"
            ref="options"
            :class="{ rightx: $parent.rightx, notHeight: notHeight }"
            :style="{
                left: leftx + 'px',
                top: topx + 'px',
            }"
            class="con-vs-dropdown--menu vs-dropdown-menu"
            @mouseleave="mouseleavex"
            @mouseenter="mouseenterx"
        >
            <!-- @mouseout="toggleMenu($event)" -->
            <!-- @mouseover="toggleMenu($event)" -->
            <ul v-if="!customContent" class="vs-component vs-dropdown--menu">
                <slot />
            </ul>
            <div v-else class="vs-dropdown--custom vs-dropdown--menu" :class="customMenuClasses">
                <slot />
            </div>
            <div
                v-if="!noCaret"
                :class="[
                    contentRight ? 'dropdowncustom-right--menu--after' : '',
                    vsDropRight ? 'vs-dropdown-right--menu--after' : 'vs-dropdown--menu--after',
                ]"
                :style="caretStyles"
                ref="menuAfter"
            ></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "DropdownMenuCustom",
    props: {
        noCaret: {
            default: false,
            type: Boolean,
        },
        customMenuClasses: {
            default: "",
            type: String,
        },
        caretStyles: {
            default: "",
            type: String,
        },
        disableBodyScroll: {
            default: false,
            type: Boolean,
        },
    },
    data: () => ({
        contentRight: false,
        dropdownVisible: false,
        leftAfter: 20,
        leftx: 0,
        topx: 0,
        rightx: true,
        triggerClick: false,
        vsDropRight: false,
        widthx: 0,
        notHeight: false,
        customContent: false,
        parentNode: null,
    }),
    watch: {
        dropdownVisible() {
            let dropdownGroup = this.$children.filter((item) => {
                return item.hasOwnProperty("activeGroup");
            });
            dropdownGroup.forEach((item_group) => {
                item_group.activeGroup = false;
            });
            this.setDirection();
        },
    },
    mounted() {
        this.insertBody();
    },
    beforeDestroy() {
        this.$el.parentNode.removeChild(this.$el);
    },
    methods: {
        mouseenterx() {
            if (!this.triggerClick) {
                this.dropdownVisible = true;
                this.widthx = this.$el.clientWidth;
            }
            if (this.disableBodyScroll) {
                if (document.body.clientHeight > window.innerHeight) {
                    this.leftx += 15;
                }
                document.body.style.overflow = "hidden";
            }
        },
        mouseleavex() {
            if (!this.triggerClick) {
                this.dropdownVisible = false;
                this.widthx = this.$el.clientWidth;
            }

            if (this.disableBodyScroll) {
                if (document.body.clientHeight > window.innerHeight) {
                    this.leftx -= 15;
                }
                document.body.style.overflow = "visible";
            }
        },
        setDirection() {
            setTimeout(() => {
                const dropdown = this.parentNode;
                const menuAfter = this.$refs.menuAfter;
                if (!menuAfter) return;
                if (dropdown && menuAfter && dropdown.getBoundingClientRect().top + 300 >= window.innerHeight && !this.contentRight) {
                    const hasGroup = this.$children.find((it) => it.hasOwnProperty("activeGroup"));
                    menuAfter.style.bottom = "-5px";
                    menuAfter.style.transform = "rotate(225deg)";
                    return;
                }
                if (this.contentRight) {
                    menuAfter.style.left = "0px";
                    menuAfter.style.top = this.$el.clientHeight / 2 + "px";
                } else {
                    menuAfter.style.top = "0px";
                }
            }, 100);
        },
        toggleMenu(event) {
            if (event.type == "mouseover" && !this.triggerClick) {
                this.dropdownVisible = true;
            } else if (!this.triggerClick) {
                this.dropdownVisible = false;
            }
            this.widthx = this.$el.clientWidth;
        },
        insertBody() {
            let elp = this.$el;
            this.parentNode = this.$el.parentNode;
            document.body.insertBefore(elp, document.body.firstChild);
        },
    },
};
</script>
