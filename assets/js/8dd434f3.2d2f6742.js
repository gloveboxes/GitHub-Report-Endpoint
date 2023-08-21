"use strict";(self.webpackChunkgit_hub_metrics_docs=self.webpackChunkgit_hub_metrics_docs||[]).push([[722],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2852:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Add a GitHub Action",l={unversionedId:"metrics-tracker/add-github-action",id:"metrics-tracker/add-github-action",title:"Add a GitHub Action",description:"Follow these steps to create a GitHub Action that collects metrics from the GitHub API and posts the metrics to the metrics tracker Azure Function App webhook.",source:"@site/docs/20-metrics-tracker/30-add-github-action.md",sourceDirName:"20-metrics-tracker",slug:"/metrics-tracker/add-github-action",permalink:"/GitHub-Metrics-Endpoint/metrics-tracker/add-github-action",draft:!1,editUrl:"https://github.com/gloveboxes/GitHub-Metrics-Endpoint/tree/docs/docs/20-metrics-tracker/30-add-github-action.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upload GitHub secrets",permalink:"/GitHub-Metrics-Endpoint/metrics-tracker/upload-github-secrets"},next:{title:"Reporting with Power BI",permalink:"/GitHub-Metrics-Endpoint/power-bi"}},s={},c=[{value:"Test the GitHub Action",id:"test-the-github-action",level:2},{value:"GitHub Actions Keep Alive",id:"github-actions-keep-alive",level:2}],p={toc:c};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-a-github-action"},"Add a GitHub Action"),(0,o.kt)("p",null,"Follow these steps to create a GitHub Action that collects metrics from the GitHub API and posts the metrics to the metrics tracker Azure Function App webhook."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the GitHub repo that you want to track metrics for.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Actions")," from the repo menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"New workflow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Set up a workflow yourself"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Name the workflow ",(0,o.kt)("strong",{parentName:"p"},"metrics.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the following code into the editor."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# GitHub Action to post GitHub metrics to an Azure Function App webhook\n# Required secrets\n#   1. A PAT with repo rights:    PAT_REPO_REPORT\n#   2. The webhook endpoint url:  REPORTING_ENDPOINT_URL\n#   3. The webhook endpoint key:  REPORTING_ENDPOINT_KEY\n#   4. Reporting group/team:      REPORTING_GROUP\n\nname: "GitHub repo metrics report"\n\non:\n  schedule:\n    # Run this once per day, towards the end of the day for keeping the most\n    # recent data point most meaningful (hours are interpreted in UTC).\n    - cron: "0 23 * * *"\n  workflow_dispatch: # Allow for running this manually.\n\njobs:\n  report_metrics_job:\n    runs-on: ubuntu-latest\n    name: GitHub repo metrics report\n    steps:\n      - name: run github metrics image\n        id: github_metrics\n        uses: gloveboxes/GitHubMetricsAction@v1\n        with:\n          github_repo: ${{ github.repository }}\n          github_personal_access_token: ${{ secrets.REPORTING_PAT }}\n          reporting_endpoint_url: ${{ secrets.REPORTING_ENDPOINT_URL }}\n          reporting_endpoint_key: ${{ secrets.REPORTING_ENDPOINT_KEY }}\n          reporting_group: $${{ secrets.REPORTING_GROUP }}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Start commit"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Commit new file"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"This image overviews steps take to deploy the GitHub Action",src:n(6950).Z,width:"1232",height:"900"})))),(0,o.kt)("h2",{id:"test-the-github-action"},"Test the GitHub Action"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Actions")," from the repo menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Actions menu, select ",(0,o.kt)("strong",{parentName:"p"},"GitHub repo metrics report"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Run workflow"),", then select ",(0,o.kt)("strong",{parentName:"p"},"Run workflow")," again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that the workflow completes successfully. The GitHub Action will show a green checkmark if the workflow completes successfully."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"This image overviews steps take to deploy the GitHub Action",src:n(7701).Z,width:"821",height:"71"})))),(0,o.kt)("h2",{id:"github-actions-keep-alive"},"GitHub Actions Keep Alive"),(0,o.kt)("p",null,"If there no activity on a repo for 60 days then GitHub disables the repo Actions and the metrics reporting Action will no longer run. To address this issue, add the Keep Alive GitHub action. On the 1st of each month the Keep Alive Action will run, and update the .stats_timestamp file with the current UTC time, and the change will be commited and pushed to the repo to create an activity. The Keep Alive Activity will prevent GitHub from disabling the repo Actions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the GitHub repo that you want to track metrics for."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Actions")," from the repo menu."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"New workflow"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Set up a workflow yourself"),"."),(0,o.kt)("li",{parentName:"ol"},"Name the workflow ",(0,o.kt)("strong",{parentName:"li"},"metrics_keepalive.yml"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the following code into the editor.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# GitHub Actions go to sleep after 60 days of no activity\n# This action runs every month and updates the .stats_timestamp with the current UTC\n# This will generate activity on the repo\n# This activity will keep the git hub repo metrics action alive\n\nname: "GitHub repo metrics report keep alive"\n\non:\n  schedule:\n    # Run this once per day, towards the end of the day for keeping the most\n    # recent data point most meaningful (hours are interpreted in UTC).\n    # https://cron.help/every-month\n    # Action run midnight UTC 1st of each month\n    - cron: "0 0 1 * *"\n  workflow_dispatch: # Allow for running this manually.\n\njobs:\n    resources:\n        name: Update the repo metrics timestamp\n        runs-on: ubuntu-latest\n        steps:\n            - uses: actions/checkout@v3\n\n            - name: timestamp\n              run: date -Iseconds -u > .stats_timestamp\n\n            - name: Update stats timestamp\n              run: |\n                git add .stats_timestamp\n                git config user.name "Repo Stats Timestamp"\n                git commit -am "Repo Stats Timestamp"\n                git push\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Start commit"),"."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Commit new file"),".")))}u.isMDXComponent=!0},6950:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/add-github-action-b5c86a31290557b00cbdac4ea1384545.png"},7701:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzUAAABHCAYAAAA+7mm7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAACTlSURBVHhe7Z0HeBRVF4YPvTcpht6lQyB0kKL8GEAQAVERlCIqAoqKBRVQpKmgdIEABhBEhAgCoVhoImgooSsdaZGOoFThn+/szGZ2s0l2N1Gz8L0+99mZe2fu3HtngufMKZPqloEQQgghhBBCSICS2vwlhBBCCCGEkICESg0hhBBCCCEkoKFSQwghhBBCCAloqNQQQgghhBBCAhoqNYQQQgghhJCAhkoNIYQQQgghJKChUkMIIYQQQggJaKjUEEIIIYQQQgIaKjWEEEIIIYSQgIZKDSGEEEIIISSgoVJDCCGEEEIICWio1BBCCCGEEEICGio1hBBCCCGEkICGSg0hhBBCCCEkoKFSQwghhBBCCAloqNQQQgghhBBCAhoqNYQQQgghhJCAhkoNIYQQQgghJKBJdcvA3E42Pl0dpr9LoxfLiXPHJX+uArpftViIBBetJs2CH9R9QgghhBBCCEkqyarUbDm0SYYtHKSKTEJAyYFi06Vhd7OGEEIIIYQQQvwj2ZQaWGemrZxs7nlH18bPULEhhBBCCCGEJIlkianxR6EBOMdyVfu3uHbtmixf8a2Wv//+26xNGcyLWCD3lA+WV17rJ5evXDFrSUrl9JkzMmv2F7L7l1/NGkIIIYQQ8l+QZKUGLmf+KDQWOBexN0kBisr3K1dLt2eel+q1G6hiUL5ydXmw9SMy7P0RcvDQYfNIkeit26V3n77yUt83jO1tZm3CeKNsWMeM+Gi0WUNud8KnfybvDh6m5cKFC2YtIYQQQvxl8PBRWuIDbS/2HWDuERJLkpUaxNAklaRYa/bu2y8dOnWV53q+KGt/+FH++OMPrb9x44bs2bNXPjUEz02bt2gdyJs3j5QuVVJq16ohRQoXNmtFTp0+LWPHT5T3hrxPK8kdBpReKL/jJkwya7yjdOlSkiVLFqlft45kzZrVrCXewL83Qgghntj1y17j/xFnzb24oO3U6TPmHiGxJEmpsbKb+QLiaFDsoA9YfHwFCk3PF16Wbdt3SLmyZWTCuFESvfFH2bMrWn7ZsVnWfL9chgwaINlsAmfxYkVlydfzZVrYJ6rgWBw8eFiFrPMXzps15E4BSi+U3ys+CtcPtWwhW6LWSa/nn5U0adKYtcQb+PdGCCHEAkpKxIJILRbWvnuxwPaaHzZQwSFOkqTURB/ebG55x5utB2piAKR1dsdXaw3cffB2/dChw9KieahMnzZJmtzXSDJnzqztqVOnlqCgu+WRdm3kgaZNtI4QQgghhKQcYJmBO9m8BUu0ACgq1r57sZQYbE+cMlMGDx+tfRCSJKXGF+sKFBqkcY45f8KjAoN6X9i6fYds+ClKChTILz2efVpy5sxptiTM/gMHpVGTZlqwfe7ceXnksU7S8alu2r5o8VKpUq22xsf8HOW79cgOzo8vFgexN2hDLI4nzp07Jx+PHqcxQogP6tq9h2zfvlMSS1ZnzQd9r9/wk3wxd7728Vq//nL16lU95o+LF+WTSVPkvqYt9Li6DZrIpLBpcvnyZW0H9n4wD/QFN7/4jrc4cuSo9H/nPT0Gx+LaL778muzctTvRsQN7/BLuD2KfKlWtpf2Fz5il8VPnz5+XocM/1L7RhmOOHY/7/CQ2T+tZePPtd3R/8pRP9Tj3ZwN1ntYyvlirmzdvyg/r1us9w/hwTJtHOsh3K1eZR8RdJ/xCSf/zzz/NIzxjPTf4xfOAfps80NIZN5YS7m1C6/b77ye17Z/4eyOEEBJ4rP1hg/62a91Cnnu6k08F5zisPA5liNzZJEmp8eR61rxqSy127ArN0IXvypaDSRNeIECtX/+zxs3Ur1dHXcr8JXXqVFKwYAEpUaK47mfPnl0qViwvlStVlAwZ0mvdvw2EwkGDh8uX8xdIkSKF1PoEIbmLISRHbfTeOrZ02TcaxI44o7//viE3jXU7deq0PN+rjypMOXPkkA6PtZesWbPIyI/HyMBBQ+Wvv/4yz47lu+9Xyst9+6nAjHU6ffq0Ho++7cI8BNiHDSEbQizAGqZPn94Yxwp5quuzsnT5N1rvDfv3H5Q+r7ymmcXgJohrQpGZFj5Dhr4/UhZHLldLHDLYLYlcpgqBfezezDNt2rRS0phPoUIF9Zw8efLomFGHNjue1tIT6Hfo8BGq0OCeYezly5VVV8ktW7bqMdju9mxPXaegu/NJ5yefkMKFCmjiimvXrusxiYE+oGDs2LlLbmA8hiKVEu+t+7pJKklxf2+EEEL+OyzLy731a0mD+rV9KjiHEIskJwpwJ7RKC+n30ABn3Iy3Co0vsTlXrl6Vk6dO6jaEt3Tp0uk2sKwj9pJQ1rIcxvmjRr4vgwa+rfsNG9STWTOmybwvPpMqlStpnYX9rbJ7sd72JwcQhqtWqSyrvo2UiLmzjd+lGr8BwXDBwkVqrfCGSEPgnDh+lMYXjfxgmKRJnVrjGLBG/d98Xb6cM1PeGfCmLJj3ubrwoe+Vq9aYZ8eyaXO0zAgPk8ULvpSliyJk6uQJKowuX/Gd7N7tSGf825EjMnjoByo4D3y7n44da4hf7KN+yrRwOXnylB6fGHv27jOE/Y56vWWLv5Jnu3fV+o9GjZNbhgC/InKhjmfShDEarL9p0xY5dPg3PQbr4808ixYprHN5/jnHt5LatG6pY0Yd2uy4r2WmjBnNFle+Mvqe8dlsKWYo2l/Mni7fLV8sC+bPkZXGOkC5AVAk4Db5xOPtdWxvvvGqzJk1Xd4fNlgyZvLcrzsYf8MG9WXb5p/0+ShsKGYp8d66r9vd+fJ5/fdGCCGEEOItSVJq8ucqYG7FYmVDQ+zMmM4TvbbQeOrrTqV2rZry2KPt9E04wNv2Lp07Se677pIt0Vu9Vgx69nhG7q1fT+OLwJGjx2TND+ukanBlFXSt4HZYgurVra3bm7dsjfP9ni5PddSMcSBVqlRSt04tVbLgKvVzVJTWQ5iG9eC+xg3lYUM5sMaO3wdbhEr1kGqyY8cu2bX7F61PjEaGwB7atIleD300ub+xKi8oj5sWCFC5UgUpU6a0nDl7Vi5dcrhu+TvPhHBfS0/A2vHtdyvVyvPm632N61fR8YM8uXNL82YP6HamTJn0d/eve3SsAMcVK1okXmXJncaNGki3rk9JxowZdD+l3ltv1o0QQghxTwjgbSHEIkmSRlDO/OZWLLC4tB/9kG5XLRbitcsZjvWWtIbAZgmGly9fcRHUatYI0exnKJ9Nn2rWJg8tH2wmWzdvcPZvL0MHJ5+lJm/e3JI+g0NYtcAb7vwFgtTidNVLS02F8uWcQjU4c+asHD9+wlCMtknt+o09WpqQjera9VgXqPxBQXLPPaXNPQcQmMuYdZYiAcsDqFihnDNZgwXe/GMsAB+s9IZMmTNJalMwB0iZnCNHdilSuJAULBD73GGd7PvAn3kmhvtaegLuX4htgZWnVMkSZm1cmoc+oG6TmzdHS9NmrTSeBenIfVGyoIhkz5bN3Eu599abdSOEEEJW/7AhTlKAxArOIcQiSUoNrDGesBQbJBLwNobGU0a0+IC7GVI4gy1bt6pAd7sDK8AfFy6ae0kDrlFw50IqYvdSr04dVRotUqVO5fEt+/ETnhM7WMrmPwWsA5alIDF8mWdygvHZXSLdQZzNxPGjtcDKsXHTZv1wbD9D+fAU9+ILgXxvCSGE3Ln4kygAhRCLJCk1+XMWkKrFPVtYoNi8EP6cVwoNXM/gpuYL99avq2+r4fYyZ+48n95y/9v89ttRuXI5NqYHmaWOHos/hujyX5flptt8jhw9qsImguPz5L7LrPWNXLly6tt5uDh17PCYvNCrR5zS5uFWLgI53v6fPOmIX7KA4L1v/wHdLmW6LlkfMv31171xYn4uXrokBw4e1G24Yf3T+DPP5CBrliySI3t2ddX6dW/C6SWh+MCda/bMabJ44TyNt0Hcy5q168wjfONOubeEEEJuT/xJFFCurKu3AbmzSbL7WbMqvikjnkBiAV8pXKiQdO3ypMYv4EvwAwcNkcO/HdEsUADfsdm6bbtu+wKybiFlcHKQ21A+kHIaKW83bYnWrG0oSASwes0P5lFxWWW0IcDamsuJmBiZHDZNs701vLe+uvz4A9y0KlWqoBnFkB7ZnrYXwuqCrxc7UwPbmfX5XKdrEca0ZOly+X7larUKVKtaRetDQqrqXNHHwkVLnGNHv4sWRap7VY3qIVKhgsNV6Z/E33keOHhILl68ZO75Tp48uTXWBfdpzNhPVLmxwPpFGusGkOXMPiYE+WMtAZJg+EOg3tvk/HsjhBBCyJ1LkpQaAAuLlenMH3CuL/E0FvDTb93qQRnw9huSIUMGmftlhPwvtKWUrVhN4whq1GkoH44cpcemSZNWUifi128pIAh2btu+o7Ru+5h+aT4pQFhtUL+eCrkv9OkrLR9uL81atpGp4TM0IDs+MJaPPh4rTYz5YBxNmz2kwdqIF2rXprXfMQqIh0CmL8xz6qfT5d7GD0ib9h204Nsjo8aMdwqsdvbvPyChLR7W45q3aitv9X9X6+HmBOUSlCheTPr0fl5jMtBev1FTafdoR2nUpLmm9M2XL6+89GJPyZsnjx7/T+LrPGGJgHKMIP+H2j4qT3Z5Rg4ccFgffAFzf+LxRzVeZtv2HdLCWKvQBx/We9jYWAcrkB7XwZjgcoa0zEiVDIUHLpXVq1XVY3wl0O7tP/H3RgghhJA7lyQrNQDWGn8UG5wTX1yON0DIeqx9O03527vnc5oFywLfHmn6v/tl8idjNX0sFJ+EgOD2Wt+X9A01vtWBb8Vk9DITVXzAxejlPr30OyQQOiEow2UOqW0T+rYOlJewSeOkbJl7NLUxxo4+Rn30gcZjJAW4Oc38NEwebd9Wxwf3PbjHIUPWiPeHeBwXUg5jHmdOn9U5VKxQXtP0PvxQS6eChd+HDCVzzqxwaRbaVN/iQ7AHzz7TTWZNn6rxI/8WvswzpFqwvP7qS/qdmqNHjxljvyoZ/Lz3uD/jx3wk/V7vq88j1guuhnA1Q1YyULVqFbmndClVVPHdF6wVsoRNDZvg/GaOPwTSvf0n/t4IIYQQcueS6pb9U+BJZGn0Yvl0dVii35xBDA1czvyx0JB/BwiZz/TorS58yCIHRYvcHvDeEkIISSkMHj5Kdv2yV0aPGCR58/gWm4kPd77Yd4CUL1ta3n6jj1lL7lSSxVJjAVe0MU9N1A9uNq/a0vntGfyiwDKDMvfFhVRoCCGEEEIIIclCsio1QJMHGMoNLDFQXta+E6W/KHA1S4q7GSGEEEIIIYS4k+xKDSGEEEIIIYT8myRrTA0hhBBCCCHeErEgUuYtWOJzPA1ATA1oWL+2PMsPcd7xUKkhhBBCCCH/CVBMJk2ZqckC/IFJAogFlRpCCCGEEEJIQMOYGkIIIYQQQkhAQ6WGEEIIIYQQEtBQqSGEEEIIIYQENIypIYQQQggh/xExsqLfexJ+wtyVYHkrvLtUMPeUTWHSYWy0uRMknYf1l6b5zd1AB3ObV1hGDwuVvGYV8Q9aagghhBBCyH/DiWg5Xqe/zA4fr2V0mxgZ0m+ZnDKb5cQyGTg2xlBkHO2zewdJuKEErXAqQYQ4oFJDCCGEEEL+G/KHSudWQeaOSN4aNaT0iSjZYiotOyMWibTpHmuZCekub9WIkXVRMWYFIQ7ofkYIIYQQQlIGsMz0OyLt1QXN4Zp2vN146Rxithuc+vo9efFIS5ndM9iscUXbIyylx9Vdbef4njIkyrHtydXN9VyRpr1jr+3eVrpNf3nXqZBFS3jnMJHe/aXAvFh3Ovv5iosrnXH93iJD7O5nLu0ezrfhOpe4bnku7TUMZVDCZG5h+5gTm5Nn8MHUsmVL6zeCPIFvD+3+Za80qF/brHElsXa/gVJDCCGEEELIf82Occ/fGrDwhLkXdx+cXDjo1uNvLL110tx3YePkW48/NfnWDnP31salt5Yfd2yir8fHbXHsGLj3o/v2c48b5250bOq5LtfccuvTp+xjc+w//tQg5/Xi9Kdji213nmP1a1xvgL3ddv24GOcmMJc449Vrx13bhOcUl4lhM7QflNVr15u1scz/aomzHce6g3MSak8KAe9+9tuRYzJ8xDjp/MxL0qFzT+nYtbf0eXWgbPh5s7afPnNWXn97iIR9Okv+/vtvrfPE2E+myQuv9Jez586bNQ6wj3q0e4s/5xBXvL1vdyL79h+SKZ/O1u2IhZFa3Ll8+Yq8M2Sk/Lxxi1kTC47H3wqKp2c+PnDdp3v0TfC5to7xNKb/CowFa4E1sdYlJY3PE/YxE0LI7Q6sBdb/l6Jqj3exFFSoHSx7I8JiY2hOLJNxNsuCR/IXlnzmpoSEOqwXxnlzo4LlLZt1J2+rltLU6eoWLUsiRDoPs1lu8hvnwkqi5wZJ5xfswfzB0rm3Mbb10bHxPwalba5y2r/EyDHtP0ZWzIt2abf6cCVIClrt1vU9Ypxrn4u67R2Rk9jxNF512zO3gQ9zsrP6hw3mlqi1xZ1dv+wxtzxjP2eXh/OTQsAqNYZCJmt//Fn6v/uB7N1/UCpXLCf31qsl9erUkLty5ZRTp07rcVevXpU///xLbt6M9bKLXP69vPrmYBXAyL+Lt2vv6b7dzvjyTJ49d07uuiunbh87HiOFnP/6OYBA3K3HK7Jn7wGzJhYoOavWrJdxHw/RgMtGDerIO4NHeq3YgK3bdsU7zqUrvpe/Ll829wghhJDEydsqNlFAjQ1QbsJkp9kGYXx0G5Hwfg6lpwNc06AIFArynC0spIahqCySF41jwzeZdeD4EdlrKC5DTOXJUQxlyVA2jh832jdFGds2hcKOnuuhrUDhWEXCpHhBd9cts3/8GspN3HYb+YOlXn7HGAd+nYjiBgzFZKA1l36LjDGaxDdeOz7Myc5zT3fS37x5csu9HtzH7C5lntrtdQ2T2f0sYJWavfsOyPSZc6VYscIyYtgAefmFZ6RH9ye1DHjzJWnZoqkeV7BAfhXgnu3WUdKkSaN1+w8cknM+CHEk+fB27T3dt9sZX57Jn6K2qCJjWR7uypXLbIlVWj4c2l/uKV3CrHWAY6E8dXy8jSr+oFnT+1RB2rf/oO4nRu7cuaRQofyybccusyYWKEZHj52Q3HfFjocQQgjxhQo9x8tbNaJlrk2otys9s8O7S75jMVK6cHzKQbB0xnHDWsrBsQ7FxakgGW1vOfuJLc6YFbuFx52E2rwmSAoUMDc9EiRNNctbdykeAetV/Fne1LrVL0rqWVnhjPm6RLh4M14/5gSlZfSIQVo8xdRY7RiTp3bUWe1tWjc3a5OHNO8YmNsBA9yRPvs8Qs6cPScvPt9Ngu6O/5ZA0IIb0z5DaIQ1Z8gHo/VN8/UbN2Tlmh9l+85fpFaNarI5erucPXteGjWoK5kyZTTPNgTBK1dUSISgVqtGVZf+sA/c66xzIDiePXdB3eO+jFgsBw8fkXJlSkumjLH9W0DgxNi+XblW34KPmTBVrVHljJsPF7sPR02UqdM/l0WR3+j1ypYpJenSplUhFm/4Idh+vWS5jJv4qSxZ9p3ILZFSJYtJ6tQOvRV9fDR2skwN/1wiFi415rtDihYt5BRu3bH6zZIliyw0+p0wabqsWx8lpUuWkAMHD8t7wz6Wz+cukN2/7pVKxrpac8Jb+umz5snocVNk/oJI2bp9l9xTqrgx1nTxrv2iyBUycvQk+dM4d8KkcNm4eauULlVC3n7nfZd1xrrOMa453jgG117+7WopUbyI5Ml9l3zz3Rr5eGyYfDYnQutz5swhRQsX1PPswIrhfi2M4fqN6x7HnT1bNuf9hUUwofuJuc+cPV9GG/du7vxFsnL1j5LWuEfFixWRVKlSOftB35u2bNN7lS9vHpk2Y47HdUmXLq32C6znY/K0Wao4wL3y6yUrJOb3Uy7nFCtaWJo9cJ8+G3q/jDlAQQQXL13S57J+nZpOSw+ugXMBzsU1HH051twOxo+/k3vr1pRvvl8rtWpWc/lbgZUG84Tikz1bVn12AZ7n194aLHPmLdS1PX7id2f/1ppkzpxJwj+bq/PDMYULFXCOG+5ueB7tY8J9xN+KVWc9rzgXBeOwro9n9PeTp3XeAOtyd768xtzTycDBI4z7XMK5HgDXO3b8hPN8C+sewDqG6+PfoPLl7pFZX0QkOD5v5uiONeb0xhjfHDhcj1+9doNzzT2tCdb5/Y/GS0jVyi73hRBCAo1TUZGyM0dDaVwmq1ljJ1q+HLZHKjzZQkpmM6s8ka2UNG7dQsoemyZzY0KkcdnLsu27PZKzVkPP56U6JdsWREk6T+3xte1ZKWFHCku7JqUki8RI9ILNIrVaSLBTcXGtO/lTpKxLbYzFNq9TGyNl2dGC0kz7sAiSYGPsDVKvkeE/5ZC2NeNaf9aFR0q+Lu9L23vMqkv7ZNV3f0iF1iGSz+N4jbF8tUaOFDbX1as5eSZL5szmlmeS2u4vAWmpgVsShI7ihhCWP+huszZx0qdPJ22NhwSCHrbbPdxC97H9T7Bt+27ZsesX6dyxvdSrXV22GIpE+My5CcaIHDj4m6FIZJbJEz6UNg81l/2GAjH4/dHGA5BJ3n27r3Ro31p+XL9RPv9igSo9FvMXLlHF6+nOHSTIENjmRiySHzds1DarjwsXLkqnDm21XLjwh3z48Sdy+Lejekx8QDgrVbyYhP6vkZw+fVaGfjhGZhsKRetWoVK3VnX1jVz2zSo9FkLfR4bCsHXbTnmu+5PS79VecuXKVRllKAoQ+BNae7TvNNbqvYGvyTtvvRJHKLthCPxYOygsFcuXUYtcg3q15fr1G/LDjz/LzM/nqTA3bFA/ub9RfZ1ffLhfC8Q37vO2fhK6n9bc16z7SZo0vlfHV7BAkKEofSkrjDHb2bl7jyqlM6aMljq1Qrx6JrEeGCusV7DA4HdQ/1flvob19G2HpzVzB8oXjoH7mjsQ1NHmjZUFSqy7dQfz37Zjt4uQbYHj3ujbS8eJce/dd1AFcjtQBjs+1laPwRpAYYAy4C17DYEefeN8rAsUysRc+XB/oIDZrU64JpTGyhXLmzVxQd8Y65RPRuiLA2/xdY5wH8Sa4ngUu6sg1hnraD8f84AFL74XFYQQkhI59bUtXgZsCpMhUcHS3mMGLmRDM46v0dIly5cd1/5i5Jgl5uQPlfY1YiR8jO0bOOhvvLnvqf3EMlkBFzaP50ZL+NhoadrO249mBknVOkGy15DPnJYjo3+X+CBj7naXuZNH4nNBC5KChURWbLCypBnzGGNzP1M3NmO8EbFZ1LAusR84NUiWOaUsAlKpuWEIkdeuXZesWbM4hT8IMAhQtvwkPQXZwo2pUoWy+mY/bZq0Krhg33JvQnB6r5fecvaBgn3U+8Pd+fLIc906aazPM906qtCNt/1IZRcfGFto08aSIX16VVq+X/WDZDPmCSEZAtT/7m9gCJVlNRDr4sVL5lliCMfV5YnH2qjg88Lz3SRXrhyG4BitygD6AC/17i4PNGmk5bnunTRuZe26n7UtPhobQvNDLR+Qxw1lCsLs1avXjOs8rH08+kgrvQ5cAaEE4O3yvgOHpcuTj6qwXqFcGWndMlStCUeOHk9w7fFmvWXzptruiR27flUlDVaI3j266prCjSq4cgW9P+gnpFplKVqkkDzarpU0M9YwPtyvldC4Dx0+oseAhO4n+vjVEEIfafOgjgvH9HquixQzxgNF59Kff5q9iJQsUVQVMljREnsm3YE1sVABh+AKIdZuYUgMKC2wVtqFaSgX63+K/RcUa4uSEOinuXEf4Mpm/Y1t37lbfytVKKe/dvA8W8I/xg0FDoqDneah9zmPsaylmKu3PPHow05h3lJWPClvdqz1gOJgzQMKGOrRR3xUqVzeJ2XGwtc54pnA37QFzgEYY6mSxZ3bICGlkhBCUjJ5C9riZVDGimuaZXvcSOf3ZB0+1BlPKmfg2p/jeCvxQIWe/aWzOOJtrPbjtWMFeHV9K2Rr7xclYlpd4rRp+ub40y17Am50+nFRq48xIr3siQIKFDZd5hxliHSPd64VenaXplFhsWNpZ3c/gxubMdejVntPGWf05ZIowCA55pSSCNiYGgAB27J6BN2dV7p37aBv0aHs+EOGDOlVKIBAahXso94fgoLySbZsDhMjhNSiRQrKNWPMly79pXWegJCaOVMm3YaigDfoJ2JOyvN93tQH7okuvTSmAkodlDuL0oawBGEdZM+eTQUiCNIXL/6pfRTIf7e6OlnAwpUta1Y5dz5hwbFk8SL6i/FjHTAf9AVgPsR1bt68qQoYFIBr167JiFETnX9EcJPBPUJ9QsCKkJCVAC5vUGBrhgQ752lRxVBs0htK4AcfTZChH4yRPXv3O93uPOF+LW/HndD9RB9QRMuULqntAMfinEuX/tT7ZYFrQ6D1BSgfGNeA9z6U71ev0+15Xy3Rgm13y0d8wPoHpcJS3qGYtAi9P0Eh3hMQqiFI49kCeCahIMQ3L6wnrodiV6Is3JMdoO/ElBI7OB4vMtB/fEkSPAEl8syZczoP9IH1gMKW0P3xda0sfJ0j/i2wXBsBti0l1lIOse4gIaWSEEJSNCGG4G5apB3FptCA/KHyrq09sW+ouPfnerwVsxJb3AV4CPqx7a7ffXFtcz/XEcuTWJ1LfBC+TYPxWt+ocZtrQsqbM3ZIizHOEJxrXzvXub7bStRq5Z6oIOE5BRYBqdRkzZLFEMrzyaHfjqhLlNYZigxiCqqHVJGMGTJona9AyO/UoZ1aRayCfdQnB3//fdPc8o0SxYvKyOED1L3GKoMGvCo5c2Q3j3DllvHfP5U1LK0hzEOBiA8Ig6/26eEyVpTgyhXNI/wnFf5zU2hASazPsAEqnEO5GDRslCyO/MZs9Q5/xu3v/fSHmtWr6j82sCT16fW0TP1kpFqp4GqFerR7Cywx1j9ecFuD1cZd4E4MCNVQ+BFHAyspLC+WJcEO+kbaaGBdE3NITnD93i+/rUoV+sfauCdJiA9YTnAslAtLsbGsICkdJHnAeFESUyoJIYTc2Tjcz4KlRgArLYkRkEoN3tgjdfO5cxdk/sJIuZqIFeCfwG4lgkD3x8WLum3njz8uOceGX7w9RrAwXLa8IWPGDGoJOXnqtL7phyBpFSg0dmvEKVO5A6dOnZGY30/quTlyOKw2CM5GPxYnYn7XwPE8eXKbNUkHQc+wLh03+raPFcU9RsRX0DcSBXjKuoX7AKsIXORGDB8ohQ0BfVP0dhX2vMHbcSd0P63x/bp3v7YDuAfGxJyU7Nmz+q1o27EEWCSFwLUgwPprNbCwFBJ/BHlYOXDuqjU/xhvLAfcoWBcQ6+UvnuZoWYgAngm4hMEK5Q9QzqAU+BuTktj4kgvcc+v+A+u6sNLgPuB+EEIIIY7YI8ulzFFeXF9DRrtbwW4zAtb9rG7t6po2DpmMXu33nmbE+iRshmYNswfPegLCAASEVWvX60eEINB6C6xEEHy279htZuBaJbPmRHh8a//Lnn2abQxjnDJttsbBIHuRt0ITrBL169aUq8b4kNkLsTEITkdmLVzXzsLFy2XhouWa3WrC5Oly/fp1adywrio+TZs01GPQB85DmRg2UzOE3d+onrYlB2XuKamuacgMhrgNZNFCVjJkbbMUDH/XHnEm6B9zxIcnsaa4RvS2nbJ0xUq9F4jb2bR5m5wx7j9c7bxVpLwZN0joflrjs/pYu+4nzW4GYbP5A/er8pMQ3qwL2pHkAEqCFUuRlDfz+DvB3wuEeuuZhJsYijfAyoG/BWRig9XAExDALfcu4B7D4w24hv3bOO59oN0eNA/rkbfuZwAKHe4TEgBgLXwlsfH5C+aAuVjg3xlcy4rLwb3HNlwQk0PBJYQQcrsQ183O6eJ2GxOwSg1S5Xbv0kFdxBDrASECgiSEk5CqleSpju3V0uEJKEMQBlauXicbfBQ+ICjDIoBYCQjTyGzVPPR+yWUoCO5UC66oqW0nT/1MojZv1eB1ZD3y5EIVH1UqldfAfygnU6fPkZFjJmk64CKFXNMVt37wAdm8dbt+gR/Z4Z5/5ikpX9aR5w8pa/v06q4Z1GbMmiez53ylwtEbr/RyibNJKrAe9e3TQ8qVKWUoBatl2Idj5auvl0q+PLmdCoa/aw+lAG5TNQ2hE/cZihvSC0PJzGFcF2mNkTYX2caqBVeSJzu0izfY3h1vxg0Sup/W+GqEVNE+Jk6ZqdYz3Dtv3K28WRcoHnAXwy/czRIL6PeEFZuDgrgaJDXw18IBoAQkFDiPeijXiAXCNWER8dX9DHPFNex9YN0t0G6PE4Ii6q37GcB64u8ByQX8iUlJbHz+gjlgLugTBSns3S1esM4g2UBicUCEEELI7U6qW/a8wCTggJCK1MOIs/AlroJ4DywASKULwdkfRYKkfGCdgqUjKQrefwGsQ3iR8forPZ3WNkIIIeROJGAtNYQQkhzgxQDcxwItJgVWnM/mzFcrExUaQgghdzpUagghdySwcuDbVpOnztKPg8bnQpcSgWUJqauRHpzWQ0IIIYTuZ4QQQgghhJAAh5YaQgghhBBCSEBDSw0hhBBCCElRRCyIlHkLlph7DhrWry3PPt3J3CPEFVpqCCGEEEJIiiOv7QPh2C5XtrS5R0hcaKkhhBBCCCEpEnynCwrN6BGDzBpCPCHyf/Wm/x1C/W96AAAAAElFTkSuQmCC"}}]);