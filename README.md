# snowflake-id-generator
## тестирование 

a   /‾‾/                                                                                                                                                                                
/\  /  \     |\  __   /  /                                                                                                                                                                                 
/  \/    \    | |/ /  /   ‾‾\                                                                                                                                                                               
/          \   |   (  |  (‾)  |                                                                                                                                                                              
/ __________ \  |_|\_\  \_____/


     execution: local
        script: load-test.js
        output: -

     scenarios: (100.00%) 1 scenario, 2000 max VUs, 5m30s max duration (incl. graceful stop):
              * default: Up to 2000 looping VUs for 5m0s over 5 stages (gracefulRampDown: 30s, gracefulStop: 30s)



█ THRESHOLDS

    http_req_duration
    ✓ 'p(95)<1000' p(95)=216.03ms

    http_req_failed
    ✓ 'rate<0.05' rate=0.95%


█ TOTAL RESULTS

    checks_total.......: 4067274 13552.751606/s
    checks_succeeded...: 99.04%  4028470 out of 4067274
    checks_failed......: 0.95%   38804 out of 4067274

    ✗ status is 200
      ↳  99% — ✓ 2014235 / ✗ 19402
    ✗ response is a number
      ↳  99% — ✓ 2014235 / ✗ 19402

    HTTP
    http_req_duration..............: avg=68.75ms  min=341µs   med=31.22ms  max=6.95s p(90)=139.63ms p(95)=216.03ms
      { expected_response:true }...: avg=68.59ms  min=341µs   med=31.23ms  max=6.95s p(90)=139.37ms p(95)=215.45ms
    http_req_failed................: 0.95%   19402 out of 2033637
    http_reqs......................: 2033637 6776.375803/s

    EXECUTION
    iteration_duration.............: avg=438.75ms min=231.6ms med=335.45ms max=8.75s p(90)=646.49ms p(95)=878.11ms
    iterations.....................: 677879  2258.791934/s
    vus............................: 1       min=1                max=1999
    vus_max........................: 2000    min=2000             max=2000

    NETWORK
    data_received..................: 295 MB  984 kB/s
    data_sent......................: 157 MB  522 kB/s




running (5m00.1s), 0000/2000 VUs, 677879 complete and 0 interrupted iterations

## мониторинг 
kubectl get hpa -w
NAME      REFERENCE                                      TARGETS                               MINPODS   MAXPODS   REPLICAS   AGE
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 2%/70%, memory: 137960Ki/375Mi   1         3         1          110m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 52%/70%, memory: 176528Ki/375Mi   1         3         1          110m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 30%/70%, memory: 185612Ki/375Mi   1         3         1          111m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 35%/70%, memory: 196104Ki/375Mi   1         3         1          112m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 43%/70%, memory: 206224Ki/375Mi   1         3         1          113m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: <unknown>/70%, memory: <unknown>/375Mi   1         3         1          114m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: <unknown>/70%, memory: <unknown>/375Mi   1         3         1          115m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: <unknown>/70%, memory: 152224Ki/375Mi    1         3         1          116m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: <unknown>/50%, memory: 152224Ki/375Mi    1         3         1          117m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 50%/50%, memory: 182284Ki/375Mi          1         3         1          117m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 34%/50%, memory: 205572Ki/375Mi          1         3         1          118m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 32%/50%, memory: 209800Ki/375Mi          1         3         1          119m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 200%/50%, memory: 251168Ki/375Mi         1         3         1          120m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 84%/50%, memory: 199764Ki/375Mi          1         3         3          121m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 93%/50%, memory: 210605397333m/375Mi     1         3         3          123m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 98%/50%, memory: 211843754666m/375Mi     1         3         3          124m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 21%/50%, memory: 206148Ki/375Mi          1         3         3          125m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 1%/50%, memory: 209593685333m/375Mi      1         3         3          126m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 0%/50%, memory: 202844842666m/375Mi      1         3         3          127m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 0%/50%, memory: 197940Ki/375Mi           1         3         3          128m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 9%/50%, memory: 199028Ki/375Mi           1         3         3          129m
app-hpa   Deployment/snowflake-id-generator-deployment   cpu: 1%/50%, memory: 222680Ki/375Mi           1         3         2          135m
