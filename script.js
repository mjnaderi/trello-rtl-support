/*
 * trello-rtl-support
 */

function add_style(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function ($, document) {
    var doms = 'h1, h2, h3, p ,a',
        inputs = 'textarea, input[type=text]';
    $(document).ready(function () {
        add_style([
            'div.list-header {padding: 8px 10px 8px 34px; }',
            'h2.list-header-name {font-family: "B Yekan", Tahoma!important; font-size: 14px; float: right; direction: rtl; }',
            'a.list-header-menu-icon {left: 0; right: inherit;}',
            'a.list-card-title {font-family: Tahoma!important; font-size: 13px!important; direction: rtl;}',
            'span.icon-sm.icon-edit.list-card-operation {right: inherit; left: 0;}',
            '.list-card-labels .card-label {float: right!important;}',
            '.badges {float:right!important;}',
            '.list-card-members {float:left!important;}',
            'textarea, input[type=text] {font-family: Tahoma!important; direction: rtl;}',
            '.card-detail-item div {font-family:Tahoma!important; font-size:13px!important; direction:rtl;}',
            '.action-comment .current-comment {font-family:Tahoma!important; font-size: 13px!important; direction: rtl;}',
            '.checklist {font-family: Tahoma!important; font-size:13px!important;}',
            '.checklist-item-checkbox {left:inherit; right: 5px; }',
            '.checklist-item {padding: 0 38px 4px 0; direction:rtl;}'
        ].join('\n'));
    });
})($, document);
