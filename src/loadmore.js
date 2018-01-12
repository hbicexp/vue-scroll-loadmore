'use stick'

const LoadMore = {
    inserted: function (el, binding, vnode) {
        if (!binding.expression || binding.expression == '') {
            throw 'Expression is needed.';
        }

        el.dataset.isPull = '1';
        el.dataset.scrollHeight = el.scrollHeight;
        el.$pull = function () {
            if (el.clientHeight + el.scrollTop >= el.scrollHeight) {
                if (el.dataset.isPull == '1') {
                    el.dataset.isPull = '0';
                    vnode.context[binding.expression]()
                }
            }
        };

        el.addEventListener("scroll", el.$pull);
    },
    componentUpdated: function (el, binding, vnode) {
        if (parseInt(el.dataset.scrollHeight) != el.scrollHeight) {
            el.dataset.isPull = '1';
            el.dataset.scrollHeight = el.scrollHeight;
        }
    },
    unbind: function (el, binding, vnode) {
        if(el.$pull) {
            el.removeEventListener("scroll", el.$pull);
            el.$pull = null;
        }
    },
}

const LoadMoreParent = {
    inserted: function (el, binding, vnode) {
        if (!binding.expression || binding.expression == '') {
            throw 'Expression is needed.';
        }

        if (el.offsetParent.tagName === "BODY") {
            throw 'Plase use v-scroll-loadmorebody.';
        }

        el.dataset.isPull = '1';
        el.dataset.scrollHeight = el.offsetParent.scrollHeight;
        el.$pull = function () {
            if (el.offsetParent.clientHeight + el.offsetParent.scrollTop >= el.offsetParent.scrollHeight) {
                if (el.dataset.isPull == '1') {
                    el.dataset.isPull = '0';
                    vnode.context[binding.expression]()
                }
            }
        };

        el.offsetParent.addEventListener("scroll", el.$pull);
    },
    componentUpdated: function (el, binding, vnode) {
        if (el.offsetParent.tagName === "BODY") {
            throw 'Plase use v-scroll-loadmorebody.';
        }

        if (parseInt(el.dataset.scrollHeight) != el.offsetParent.scrollHeight) {
            el.dataset.isPull = '1';
            el.dataset.scrollHeight = el.offsetParent.scrollHeight;
        }
    },
    unbind: function (el, binding, vnode) {
        if(el.$pull) {
            el.removeEventListener("scroll", el.$pull);
            el.$pull = null;
        }
    },
}

const LoadMoreBody = {
    inserted: function (el, binding, vnode) {
        if (!binding.expression || binding.expression == '') {
            throw 'Expression is needed.'
        }

        if (el.offsetParent.tagName !== "BODY") {
            throw 'Plase use v-scroll-loadmore or v-scroll-loadmoreparent.';
        }
        
        var body = document.documentElement;
        if (body.$pull) { // only suport one element.
            return;
        }

        el.$pullbody = true;
        body.dataset.isPull = '1';
        body.dataset.scrollHeight = body.scrollHeight;
        body.$pull = function () {
            if ((body.clientHeight + window.pageYOffset >= body.scrollHeight) && body.dataset.isPull == '1') {
                body.dataset.isPull = '0';
                vnode.context[binding.expression]()
            }
        };

        window.addEventListener("scroll", body.$pull);
    },
    componentUpdated: function (el, binding, vnode) {
        if (el.$pullbody) {
            var body = document.documentElement;
            if (parseInt(body.dataset.scrollHeight) != body.scrollHeight) { // hight changed
                body.dataset.isPull = '1';
                body.dataset.scrollHeight = body.scrollHeight;
            }
        }
    },
    unbind: function (el, binding, vnode) {
        var body = document.documentElement;
        window.removeEventListener("scroll", body.$pull);
        body.$pull = null;
    },
}

export {
    LoadMore,
    LoadMoreParent,
    LoadMoreBody
};