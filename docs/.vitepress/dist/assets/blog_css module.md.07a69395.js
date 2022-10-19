import{L as a}from"./chunks/index.40ea5187.js";import{C as e}from"./chunks/index.d5e3f8a4.js";import{a as l,c,g as s,h as n}from"./app.58956e45.js";import"./chunks/format.dd46f8cb.js";const o="/wusan/assets/cssModule.a65c5b7e.png",p="/wusan/assets/cssLoader.940071be.png",i="/wusan/assets/cssLoader-1.4b43964a.png",t="/wusan/assets/cssLoader-2.37ae0518.png",d=n('<h1 id="css-module" tabindex="-1">css module <a class="header-anchor" href="#css-module" aria-hidden="true">#</a></h1><blockquote><p>\u901A\u8FC7\u547D\u540D\u89C4\u8303\u6765\u9650\u5236\u7C7B\u540D\u592A\u8FC7\u6B7B\u677F\uFF0C\u800Ccss in js\u867D\u7136\u8DB3\u591F\u7075\u6D3B\uFF0C\u4F46\u662F\u4E66\u5199\u4E0D\u4FBF\u3002 css module \u5F00\u8F9F\u4E00\u79CD\u5168\u65B0\u7684\u601D\u8DEF\u6765\u89E3\u51B3\u7C7B\u540D\u51B2\u7A81\u7684\u95EE\u9898</p></blockquote><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>css module \u9075\u5FAA\u4EE5\u4E0B\u601D\u8DEF\u89E3\u51B3\u7C7B\u540D\u51B2\u7A81\u95EE\u9898\uFF1A</p><ol><li>css\u7684\u7C7B\u540D\u51B2\u7A81\u5F80\u5F80\u53D1\u751F\u5728\u5927\u578B\u9879\u76EE\u4E2D</li><li>\u5927\u578B\u9879\u76EE\u5F80\u5F80\u4F1A\u4F7F\u7528\u6784\u5EFA\u5DE5\u5177\uFF08webpack\u7B49\uFF09\u642D\u5EFA\u5DE5\u7A0B</li><li>\u6784\u5EFA\u5DE5\u5177\u5141\u8BB8\u5C06css\u6837\u5F0F\u5207\u5206\u4E3A\u66F4\u52A0\u7CBE\u7EC6\u7684\u6A21\u5757</li><li>\u540CJS\u7684\u53D8\u91CF\u4E00\u6837\uFF0C\u6BCF\u4E2Acss\u6A21\u5757\u6587\u4EF6\u4E2D\u96BE\u4EE5\u51FA\u73B0\u51B2\u7A81\u7684\u7C7B\u540D\uFF0C\u51B2\u7A81\u7684\u7C7B\u540D\u5F80\u5F80\u53D1\u751F\u5728\u4E0D\u540C\u7684css\u6A21\u5757\u6587\u4EF6\u4E2D</li><li>\u53EA\u9700\u8981\u4FDD\u8BC1\u6784\u5EFA\u5DE5\u5177\u5728\u5408\u5E76\u6837\u5F0F\u4EE3\u7801\u540E\u4E0D\u4F1A\u51FA\u73B0\u7C7B\u540D\u51B2\u7A81\u5373\u53EF</li></ol><p><img src="'+o+'" alt="css module"></p><h2 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1">\u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5728webpack\u4E2D\uFF0C\u4F5C\u4E3A\u5904\u7406css\u7684css-loader\uFF0C\u5B83\u5B9E\u73B0\u4E86css module\u7684\u601D\u60F3\uFF0C\u8981\u542F\u7528css module\uFF0C\u9700\u8981\u5C06css-loader\u7684\u914D\u7F6E<code>modules</code>\u8BBE\u7F6E\u4E3A<code>true</code>\u3002</p><p>css-loader\u7684\u5B9E\u73B0\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><p><img src="'+p+'" alt="css loader"></p><p>\u539F\u7406\u6781\u5176\u7B80\u5355\uFF0C\u5F00\u542F\u4E86css module\u540E\uFF0Ccss-loader\u4F1A\u5C06\u6837\u5F0F\u4E2D\u7684\u7C7B\u540D\u8FDB\u884C\u8F6C\u6362\uFF0C\u8F6C\u6362\u4E3A\u4E00\u4E2A\u552F\u4E00\u7684hash\u503C\u3002</p><p>\u7531\u4E8Ehash\u503C\u662F\u6839\u636E\u6A21\u5757\u8DEF\u5F84\u548C\u7C7B\u540D\u751F\u6210\u7684\uFF0C\u56E0\u6B64\uFF0C\u4E0D\u540C\u7684css\u6A21\u5757\uFF0C\u54EA\u6015\u5177\u6709\u76F8\u540C\u7684\u7C7B\u540D\uFF0C\u8F6C\u6362\u540E\u7684hash\u503C\u4E5F\u4E0D\u4E00\u6837\u3002</p><p><img src="'+i+'" alt="css loader-1"></p><h2 id="\u5982\u4F55\u5E94\u7528\u6837\u5F0F" tabindex="-1">\u5982\u4F55\u5E94\u7528\u6837\u5F0F <a class="header-anchor" href="#\u5982\u4F55\u5E94\u7528\u6837\u5F0F" aria-hidden="true">#</a></h2><p>css module\u5E26\u6765\u4E86\u4E00\u4E2A\u65B0\u7684\u95EE\u9898\uFF1A\u6E90\u4EE3\u7801\u7684\u7C7B\u540D\u548C\u6700\u7EC8\u751F\u6210\u7684\u7C7B\u540D\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u800C\u5F00\u53D1\u8005\u53EA\u77E5\u9053\u81EA\u5DF1\u5199\u7684\u6E90\u4EE3\u7801\u4E2D\u7684\u7C7B\u540D\uFF0C\u5E76\u4E0D\u77E5\u9053\u6700\u7EC8\u7684\u7C7B\u540D\u662F\u4EC0\u4E48\uFF0C\u90A3\u5982\u4F55\u5E94\u7528\u7C7B\u540D\u5230\u5143\u7D20\u4E0A\u5462\uFF1F</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0Ccss-loader\u4F1A\u5BFC\u51FA\u539F\u7C7B\u540D\u548C\u6700\u7EC8\u7C7B\u540D\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C\u8BE5\u5173\u7CFB\u662F\u901A\u8FC7\u4E00\u4E2A\u5BF9\u8C61\u63CF\u8FF0\u7684</p><p><img src="'+t+`" alt="css loader-2"></p><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728js\u4EE3\u7801\u4E2D\u83B7\u53D6\u5230css\u6A21\u5757\u5BFC\u51FA\u7684\u7ED3\u679C\uFF0C\u4ECE\u800C\u5E94\u7528\u7C7B\u540D\u4E86</p><p>style-loader\u4E3A\u4E86\u6211\u4EEC\u66F4\u52A0\u65B9\u4FBF\u7684\u5E94\u7528\u7C7B\u540D\uFF0C\u4F1A\u53BB\u9664\u6389\u5176\u4ED6\u4FE1\u606F\uFF0C\u4EC5\u66B4\u9732\u5BF9\u5E94\u5173\u7CFB</p><h2 id="\u5176\u4ED6\u64CD\u4F5C" tabindex="-1">\u5176\u4ED6\u64CD\u4F5C <a class="header-anchor" href="#\u5176\u4ED6\u64CD\u4F5C" aria-hidden="true">#</a></h2><h3 id="\u5168\u5C40\u7C7B\u540D" tabindex="-1">\u5168\u5C40\u7C7B\u540D <a class="header-anchor" href="#\u5168\u5C40\u7C7B\u540D" aria-hidden="true">#</a></h3><p>\u67D0\u4E9B\u7C7B\u540D\u662F\u5168\u5C40\u7684\u3001\u9759\u6001\u7684\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u8F6C\u6362\uFF0C\u4EC5\u9700\u8981\u5728\u7C7B\u540D\u4F4D\u7F6E\u4F7F\u7528\u4E00\u4E2A\u7279\u6B8A\u7684\u8BED\u6CD5\u5373\u53EF\uFF1A</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#A6ACCD;">:global(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u4E86global\u7684\u7C7B\u540D\u4E0D\u4F1A\u8FDB\u884C\u8F6C\u6362\uFF0C\u76F8\u53CD\u7684\uFF0C\u6CA1\u6709\u4F7F\u7528global\u7684\u7C7B\u540D\uFF0C\u8868\u793A\u9ED8\u8BA4\u4F7F\u7528\u4E86local</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#A6ACCD;">:local(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u4E86local\u7684\u7C7B\u540D\u8868\u793A\u5C40\u90E8\u7C7B\u540D\uFF0C\u662F\u53EF\u80FD\u4F1A\u9020\u6210\u51B2\u7A81\u7684\u7C7B\u540D\uFF0C\u4F1A\u88ABcss module\u8FDB\u884C\u8F6C\u6362</p><h3 id="\u5982\u4F55\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D" tabindex="-1">\u5982\u4F55\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D <a class="header-anchor" href="#\u5982\u4F55\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D" aria-hidden="true">#</a></h3><p>\u7EDD\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u90FD\u4E0D\u9700\u8981\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D\uFF0C\u56E0\u4E3A\u63A7\u5236\u5B83\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49</p><p>\u5982\u679C\u4E00\u5B9A\u8981\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D\uFF0C\u9700\u8981\u914D\u7F6Ecss-loader\u7684<code>localIdentName</code></p><h2 id="\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li>css module\u5F80\u5F80\u914D\u5408\u6784\u5EFA\u5DE5\u5177\u4F7F\u7528</li><li>css module\u4EC5\u5904\u7406\u9876\u7EA7\u7C7B\u540D\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4E66\u5199\u5D4C\u5957\u7684\u7C7B\u540D\uFF0C\u4E5F\u6CA1\u6709\u8FD9\u4E2A\u5FC5\u8981</li><li>css module\u4EC5\u5904\u7406\u7C7B\u540D\uFF0C\u4E0D\u5904\u7406\u5176\u4ED6\u9009\u62E9\u5668</li><li>css module\u8FD8\u4F1A\u5904\u7406id\u9009\u62E9\u5668\uFF0C\u4E0D\u8FC7\u4EFB\u4F55\u65F6\u5019\u90FD\u6CA1\u6709\u4F7F\u7528id\u9009\u62E9\u5668\u7684\u7406\u7531</li><li>\u4F7F\u7528\u4E86css module\u540E\uFF0C\u53EA\u8981\u80FD\u505A\u5230\u8BA9\u7C7B\u540D\u671B\u6587\u77E5\u610F\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u9075\u5B88\u5176\u4ED6\u4EFB\u4F55\u7684\u547D\u540D\u89C4\u8303</li></ul>`,31),D=JSON.parse('{"title":"css module","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF","link":"#\u601D\u8DEF","children":[]},{"level":2,"title":"\u5B9E\u73B0\u539F\u7406","slug":"\u5B9E\u73B0\u539F\u7406","link":"#\u5B9E\u73B0\u539F\u7406","children":[]},{"level":2,"title":"\u5982\u4F55\u5E94\u7528\u6837\u5F0F","slug":"\u5982\u4F55\u5E94\u7528\u6837\u5F0F","link":"#\u5982\u4F55\u5E94\u7528\u6837\u5F0F","children":[]},{"level":2,"title":"\u5176\u4ED6\u64CD\u4F5C","slug":"\u5176\u4ED6\u64CD\u4F5C","link":"#\u5176\u4ED6\u64CD\u4F5C","children":[{"level":3,"title":"\u5168\u5C40\u7C7B\u540D","slug":"\u5168\u5C40\u7C7B\u540D","link":"#\u5168\u5C40\u7C7B\u540D","children":[]},{"level":3,"title":"\u5982\u4F55\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D","slug":"\u5982\u4F55\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D","link":"#\u5982\u4F55\u63A7\u5236\u6700\u7EC8\u7684\u7C7B\u540D","children":[]}]},{"level":2,"title":"\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879","slug":"\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879","link":"#\u5176\u4ED6\u6CE8\u610F\u4E8B\u9879","children":[]}],"relativePath":"blog/css module.md"}'),r={name:"blog/css module.md"},y=Object.assign(r,{setup(h){return(u,m)=>(l(),c("div",null,[d,s(a,{time:"2022-10-19-14-01-07"}),s(e)]))}});export{D as __pageData,y as default};
