import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-CylUWkQh.js";const p={},e=t(`<h2 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式"><span>Lambda表达式</span></a></h2><div class="hint-container info"><p class="hint-container-title">公式</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//方法体是多行</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>语句<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//方法体内是单行,语句后不需要分号</span>
<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token operator">&lt;</span>语句<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="functionalinterface注解" tabindex="-1"><a class="header-anchor" href="#functionalinterface注解"><span>@FunctionalInterface注解</span></a></h3><ul><li>这是一个标志注解，被该注解修饰的接口只能声明一个抽象方法</li><li><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202404121500805.png" alt="image-20240412150055773" style="zoom:50%;"></li></ul><h5 id="练习1-线程创建" tabindex="-1"><a class="header-anchor" href="#练习1-线程创建"><span>练习1 线程创建</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LambdaLearn</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="练习2-编写接口" tabindex="-1"><a class="header-anchor" href="#练习2-编写接口"><span>练习2 编写接口</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LambdaLearn</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;用户1说话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;用户1一直说&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;用户2说话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token class-name">Human</span> human<span class="token punctuation">)</span><span class="token punctuation">{</span>
        human<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">interface</span> <span class="token class-name">Human</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="练习3-排序" tabindex="-1"><a class="header-anchor" href="#练习3-排序"><span>练习3 排序</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LambdaLearn</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;周杰伦&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;刘德华&quot;</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">185</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;周星驰&quot;</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">177</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;郭富城&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">170</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//按照身高逆序</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">)</span><span class="token operator">-&gt;</span> p2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span>p1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Person</span> person <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
 <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> height<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://cdn.jsdelivr.net/gh/gaoyubo2/image/img/202404121457342.png" alt="image-20240412145741311" style="zoom:50%;"><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
sort排序参数中的Comparator接口：
有两个抽象方法是因为：
equals() 方法并不算是函数式接口的一部分。在Java中，Object 类中的 equals() 方法是一个非常特殊的方法，它用于比较对象的相等性。因为 equals() 方法是 Object 类的一个公共方法，所以它并不会影响接口是否被标记为函数式接口。
*/</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">T</span> o1<span class="token punctuation">,</span> <span class="token class-name">T</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//公共方法，不影响注解</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="省略写法" tabindex="-1"><a class="header-anchor" href="#省略写法"><span>省略写法</span></a></h3><ol><li><p>小括号内的参数类型可以省略</p></li><li><p>如果小括号内有且仅有一个参数，则小括号可以省略</p></li><li><p>如果大括号内有且仅有一个语句，可以同时省略大括号，return 关键字及语句分号。</p></li></ol><h3 id="内部原理" tabindex="-1"><a class="header-anchor" href="#内部原理"><span>内部原理</span></a></h3><p><strong>匿名内部类在编译的时候会产生一个class文件。</strong></p><p>Lambda表达式在程序运行的时候会形成一个类。</p><ol><li><p>在类中新增了一个方法，这个方法的方法体就是Lambda表达式中的代码</p></li><li><p>还会形成一个匿名内部类，实现接口，重写抽象方法</p></li><li><p>在接口中重写方法会调用新生成的方法</p></li></ol><h3 id="使用前提" tabindex="-1"><a class="header-anchor" href="#使用前提"><span>使用前提</span></a></h3><p>Lambda表达式的语法是非常简洁的，但是Lambda表达式不是随便使用的，使用时有几个条件要特别注意</p><ol><li><p>方法的参数或局部变量类型必须为接口才能使用Lambda</p></li><li><p>接口中有且仅有一个抽象方法(@FunctionalInterface)</p></li></ol><h3 id="与匿名内部类的对比" tabindex="-1"><a class="header-anchor" href="#与匿名内部类的对比"><span>与匿名内部类的对比</span></a></h3><ol><li>所需类型不一样</li></ol><p>匿名内部类的类型可以是 类，抽象类，接口</p><p>Lambda表达式需要的类型必须是接口</p><ol start="2"><li>抽象方法的数量不一样</li></ol><p>匿名内部类所需的接口中的抽象方法的数量是随意的</p><p>Lambda表达式所需的接口中只能有一个抽象方法</p><ol start="3"><li>实现原理不一样</li></ol><p>匿名内部类是在编译后形成一个class</p><p>Lambda表达式是在程序运行的时候动态生成class</p><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h3><h4 id="访问局部变量" tabindex="-1"><a class="header-anchor" href="#访问局部变量"><span>访问局部变量</span></a></h4><p>可以直接在 lambda 表达式中访问外部的局部变量：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">Converter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringConverter <span class="token operator">=</span> 
    	<span class="token punctuation">(</span>from<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>from <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

stringConverter<span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是和匿名对象不同的是，这里的变量 num 可以不用声明为 final，该代码同样正确：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">Converter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringConverter <span class="token operator">=</span>
        <span class="token punctuation">(</span>from<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>from <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

stringConverter<span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过这里的 num 必须不可被后面的代码修改（即隐性的具有 final 的语义），例如下面的就无法编译：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">Converter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringConverter <span class="token operator">=</span>
        <span class="token punctuation">(</span>from<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>from <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">//在lambda表达式中试图修改num同样是不允许的。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问字段和静态变量" tabindex="-1"><a class="header-anchor" href="#访问字段和静态变量"><span>访问字段和静态变量</span></a></h4>`,40),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","Lambda表达式.html.vue"]]),d=JSON.parse('{"path":"/%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97/JDK8%E6%96%B0%E7%89%B9%E6%80%A7/Lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F.html","title":"Lambda表达式","lang":"zh-CN","frontmatter":{"title":"Lambda表达式","description":"Lambda表达式 公式 @FunctionalInterface注解 这是一个标志注解，被该注解修饰的接口只能声明一个抽象方法 image-20240412150055773 练习1 线程创建 练习2 编写接口 练习3 排序 image-20240412145741311 省略写法 小括号内的参数类型可以省略 如果小括号内有且仅有一个参数，则小括号可...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/my_doc/%E5%AD%A6%E4%B9%A0%E6%8C%87%E5%8D%97/JDK8%E6%96%B0%E7%89%B9%E6%80%A7/Lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"Lambda表达式"}],["meta",{"property":"og:description","content":"Lambda表达式 公式 @FunctionalInterface注解 这是一个标志注解，被该注解修饰的接口只能声明一个抽象方法 image-20240412150055773 练习1 线程创建 练习2 编写接口 练习3 排序 image-20240412145741311 省略写法 小括号内的参数类型可以省略 如果小括号内有且仅有一个参数，则小括号可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lambda表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Lambda表达式","slug":"lambda表达式","link":"#lambda表达式","children":[{"level":3,"title":"@FunctionalInterface注解","slug":"functionalinterface注解","link":"#functionalinterface注解","children":[]},{"level":3,"title":"省略写法","slug":"省略写法","link":"#省略写法","children":[]},{"level":3,"title":"内部原理","slug":"内部原理","link":"#内部原理","children":[]},{"level":3,"title":"使用前提","slug":"使用前提","link":"#使用前提","children":[]},{"level":3,"title":"与匿名内部类的对比","slug":"与匿名内部类的对比","link":"#与匿名内部类的对比","children":[]},{"level":3,"title":"作用域","slug":"作用域","link":"#作用域","children":[]}]}],"git":{},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"学习指南/JDK8新特性/Lambda表达式.md","autoDesc":true}');export{k as comp,d as data};
