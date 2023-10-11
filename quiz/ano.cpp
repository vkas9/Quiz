#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;cin>>t;
    while(t--){
        int n;cin>>n;
        vector<int>temp;
        for(int i=0;i<n;i++ ){
            int input;cin>>input;
            temp.push_back(input);
…        }
        temp[i]++;
        int ans=1;
        for(auto pr:temp){
            ans*=pr;
        }
        cout<<ans;
    }
}