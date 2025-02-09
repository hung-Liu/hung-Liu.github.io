#pragma GCC optimize("Ofast,fast-math,unroll-loops")
#include<bits/stdc++.h>
using namespace std;
#define pb push_back
#define ll long long
#define F first
#define S second
#define pii pair<int,int>
#define guagua ios::sync_with_stdio(0)
#define orz cin.tie(0)
#define osz cout.tie(0)

int main(){
    guagua;
    orz,osz;
    int n,k;
    cin>>n;
    vector<vector<int> >dice(n);
    vector<unordered_map<int,int>>mp(n);
    for(int i = 0; i<n; i++){
        cin>>k;
        dice[i].resize(k);
        for(int j = 0; j<k; j++){
            cin>>dice[i][j];
            mp[i][dice[i][j]]++;
        }
    }
    double ans = 0, same ;
    for(int i = 0; i<n; i++){
        for(int j = i+1; j<n; j++){
            same = 0;
            vector<bool> v(100001);
            for(int z = 0; z<dice[i].size(); z++){
                if(v[dice[i][z]])continue;
                same+=((double)mp[j][dice[i][z]]/dice[j].size())*((double)mp[i][dice[i][z]]/dice[i].size());
                v[dice[i][z]] = 1;
            }
            ans = max(ans,same);
        }
    }
    cout<<fixed << setprecision(8)<< ans <<'\n';
    return 0;
}